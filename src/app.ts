import { renderTodos } from "./utils";
import * as formStore from "./store";
const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLLIElement;
const store = new formStore.Store(
  {},
  { todos: [{ label: "test", complete: false }] }
);
console.log(store);
button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    console.log(payload);
    store.dispatch({ type: "ADD_TODO", payload: payload });

    input.value = "";
  },
  false
);

todoList.addEventListener("click", function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    console.log(target);
  }
});
