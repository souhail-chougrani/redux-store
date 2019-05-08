export class Store {
  private subscribers: Function[];
  private reducer: { [key: string]: Function };
  private state: { [key: string]: any };
  constructor(reducers = {}, initState = {}) {
    this.state = initState;
  }
  get value() {
    return this.state;
  }
  dispatch(action) {
    console.log(this.state);
    console.log(action);
    this.state = {
      ...this.state,
      todos: [...this.state.todos, action.payload]
    };

    console.log("dispatch", this.state);
  }
}
