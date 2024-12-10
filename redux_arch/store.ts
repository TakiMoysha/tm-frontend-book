type Actions = "INCREMENT" | "DECREMENT" | "RESET";

interface IStoreAction {
  type: Actions;
}

interface IStore {
  getState: () => IStoreState;
  // call reducer, which process the action and update the state.
  dispatch: (action: IStoreAction) => void;
}

interface IStoreState<T = number> {
  value: T;
}

export default class Store implements IStore {
  private defaultState: IStoreState;
  private state: IStoreState;

  constructor(initialState: number) {
    this.defaultState = { value: initialState } as IStoreState;
    this.state = this.defaultState;
  }

  getState: () => IStoreState = () => this.state;

  dispatch(action: IStoreAction) {
    this.state = this.reducer(action, this.state.value);
  }

  // should check type of state and process the action
  reducer<T = number>(action: IStoreAction, stateValue: T): IStoreState {
    switch (action.type) {
      case "RESET":
        return this.defaultState;
      case "INCREMENT":
        if (typeof stateValue === "number") {
          return { value: stateValue + 1 };
        }
        console.warn("Inappropriate action for type: ", action);
        return this.state;
      case "DECREMENT":
        if (typeof stateValue === "number") {
          return { value: stateValue - 1 };
        }
        console.warn("Inappropriate action for type: ", action);
        return this.state;
      default:
        console.warn("Unknown action: ", action);
        return this.state;
    }
  }
}
