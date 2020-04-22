export interface ITodo {
  id: string;
  text: string;
  completed: false | boolean;
}

export interface ITodoCtx {
  todos: ITodo[];
  getTodos: () => void;
}
