export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, InitialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(InitialState, {});
  }

  get value() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }
  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    return () => (this.subscribers = this.subscribers.filter(e => e !== fn));
  }
  unsbscribe(fn) {}
  private notify() {
    this.subscribers.forEach(fn => fn(this.value));
  }
  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }

    return newState;
  }
}
