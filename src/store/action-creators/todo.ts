import { TodoAction, TodoActionTypes } from "../../types/todo";

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
}

export function CallTodo(): TodoAction {
  return { type: TodoActionTypes.CALL_TODO};
}
