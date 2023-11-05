interface CRDT<T, S> {
  value: T;
  state: S;
  merge(state: S): void;
}

export class LWWRegister<T> {
  readonly id: string;
  state: [peer: string, timestamp: number, value: T];

  get value() {
    return this.state[2];
  }
  constructor(id: string, state: [string, number, T]) {
    this.id = id;
    this.state = state;
  }

  set(value: T) {
    this.state = [this.id, this.state[1] + 1, value];
  }

  merge(state: [peer: string, timestamp: number, value: T]) {
    const [remotePeer, remoteTimestamp] = state;
    const [localPeer, localTimestamp] = this.state;

    if (localTimestamp > remoteTimestamp) return;

    if (localTimestamp === remoteTimestamp && localPeer > remotePeer) return;

    this.state = state;
  }
}

type Value<T> = {
  [key: string]: T;
};
type State<T> = {
  [key: string]: LWWRegister<T | null>["state"];
};

export class LWWMap<T> {
  readonly id: string;
  private data = new Map<string, LWWRegister<T | null>>();

  constructor(id: string, state: State<T>) {
    this.id = id;
    for (const [key, register] of Object.entries(state)) {
      this.data.set(key, new LWWRegister(this.id, register));
    }
  }

  get value() {
    const value: Value<T> = {};

    for (const [key, register] of Object(this.data).entries()) {
      if (register.value !== null) value[key] = register.value;
    }
    return value;
  }

  get state() {
    const state: State<T> = {};

    for (const [key, register] of Object(this.data).entries()) {
      if (register) state[key] = register.state;
    }

    return state;
  }

  has(key: string) {
    return this.data.get(key) !== null;
  }

  set(key: string, value: T) {
    const register = this.data.get(key);
    if (register) register.set(value);
    else this.data.set(key, new LWWRegister(this.id, [this.id, 1, value]))
  }

  get(key: string) {
    return this.data.get(key)?.value ?? undefined;
  }

  delete(key: string) {
    this.data.get(key)?.set(null);
  }

  merge(state: State<T>) {
    for (const [key,remote] of Object.entries(state)) {
      const local = this.data.get(key);

      if (local) local.merge(remote);
      else this.data.set(key, new LWWRegister(this.id, remote))
    }
  }
}
