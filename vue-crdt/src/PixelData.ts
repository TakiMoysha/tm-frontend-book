import { type RGB } from "./types.js"
import { LWWMap } from "./scratch.js"

export class PixelData {
  readonly id: string;
  private data: LWWMap<RGB>;

  constructor(id: string = "") {
    this.id = id;
    this.data = new LWWMap(this.id, {});
  }

  static key(x: number, y: number) {
    return `${x},${y}`;
  }

  get value() {
    return this.data.value;
  }

  get state() {
    return this.data.state;
  }

  set(x: number, y: number, value: RGB) {
    const key = PixelData.key(x, y);
    this.data.set(key, value);
  }

  get(x: number, y: number) {
    const key = PixelData.key(x, y);
    const register = this.data.get(key);
    return register ?? [0, 0, 0];
  }

  delete(x: number, y: number) {
    const key = PixelData.key(x, y);
    this.data.delete(key);
  }

  merge(state: PixelData['state']) {
    this.data.merge(state);
  }
}

