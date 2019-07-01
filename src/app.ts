import { renderTodos } from "./utils";
import * as formStore from "./store";

const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLLIElement;
const reducers = {
  todos: formStore.Reducer
};
const store = new formStore.Store(reducers, {});
button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;
    const payload = { label: input.value, complate: false };
    store.dispatch(new formStore.addTodo(payload));
    input.value = "";
  },
  false
);
const unsb = store.subscribe(state => {
  renderTodos(state.todos.data);
});
destroy.addEventListener("click", unsb, false);

todoList.addEventListener("click", function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    console.log(target);
  }
});

store.subscribe(state => console.log("STATE::::", state));
