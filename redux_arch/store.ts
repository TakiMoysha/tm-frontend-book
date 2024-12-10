export interface IStoreReducer<T = any> {
  reduce(action: string, stateValue: T): T;
}

type FnDispatch = (action: string) => void;

export interface IStore {
  getState: () => IStoreState;
  // call reducer, which process the action and update the state.
  dispatch: FnDispatch;
}

export interface IStoreState<T = any> {
  value: T;
}

export default class Store implements IStore {
  defaultState: IStoreState;
  state: IStoreState;
  reducer: IStoreReducer;
  middlewareAPI: IStore | undefined;
  dispatch: FnDispatch;

  constructor(reducer: IStoreReducer, initialState: any, middlewares?: any[]) {
    this.defaultState = { value: initialState } as IStoreState;
    this.state = this.defaultState;
    this.reducer = reducer;
    this.dispatch = (action: string): void =>
      this.reducer.reduce(action, this.state.value);

    if (middlewares) {
      const chain: FnDispatch[] = this.applyMiddlewares(middlewares);
      this.dispatch = this.compose(...chain);
    }
  }

  private applyMiddlewares(middlewares: any[]): any[] {
    return middlewares.map((middl) => middl(this.middlewareAPI));
  }

  private compose(...functions: FnDispatch[]) {
    return functions.reduce(
      (acc, val) =>
        (...args: any[]) =>
          acc(val(...args)),
    );
  }

  getState: () => IStoreState<any> = () => this.state;
}
