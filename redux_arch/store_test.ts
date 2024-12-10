import { assertEquals } from "@std/assert";
import Store, { applyMiddlewares, IStoreReducer } from "./store.ts";

// deno-lint-ignore no-namespace
export namespace NumberReducer {
  export type Actions = "INCREMENT" | "DECREMENT" | "RESET";
}

export class NumberReducer implements IStoreReducer<number> {
  // should check type of state and process the action
  get default() {
    return 0;
  }

  reduce(action: NumberReducer.Actions, stateValue: number): number {
    switch (action) {
      case "RESET":
        return this.default;
      case "INCREMENT":
        return stateValue + 1;
      case "DECREMENT":
        return stateValue - 1;
      default:
        console.warn("Unknown action: ", action);
        return stateValue;
    }
  }
}

Deno.test(function stateStoreTest() {
  // const reducer = new NumberReducer();
  const store = new Store(reducer, 0);
  store.dispatch({ type: "INCREMENT" });
  assertEquals(store.getState(), { value: 1 });
});

// Deno.test(function stateMiddlewareTest() {
//   const store = new Store(applyMiddleware());
//   store.dispatch({ type: "INCREMENT" });
//   assertEquals(store.getState(), { value: 1 });
// });
