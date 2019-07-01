import * as fromActions from "./actions";
export const initState = {
  loaded: false,
  loading: false,
  data: [{ label: "eat pizza", complate: false }]
};
export function Reducer(state = initState, action: fromActions.addTodo) {
  switch (action.type) {
    case fromActions.ADD_TODO:
      return (state = { ...state, data: [...state.data, action.payload] });
  }

  return state;
}
