import { assertEquals } from "@std/assert";
import Store from "./store.ts";

Deno.test(function stateStoreTest() {
  const store = new Store(0);
  store.dispatch({ type: "INCREMENT" });
  assertEquals(store.getState(), { value: 1 });
});
