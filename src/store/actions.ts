export const ADD_TODO = "[TODO] add todo";

export class addTodo {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}
