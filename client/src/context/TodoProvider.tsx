import React, { createContext, useState } from "react";

export const TodoCtx = createContext([]);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  return <TodoCtx.Provider value={{ todos }}>{children}</TodoCtx.Provider>;
};

export default TodoProvider;
