import React, { useEffect } from "react";
import { ITodo, ITodoCtx } from "../interfaces/interfaces";
import axios from "axios";

export const TodoCtx = React.createContext<ITodoCtx | null>(null);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const getTodos = (): void => {
    axios
      .get("/todos")
      .then((res) => setTodos(res.data.TODOS))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoCtx.Provider value={{ todos, getTodos }}>{children}</TodoCtx.Provider>
  );
};

export default TodoProvider;
