import React from "react";
import { TodoCtx } from "../context/TodoProvider";

const TodoHeader: React.FC = () => {
  const todoCtx = React.useContext(TodoCtx);
  return (
    <header>
      <h1>There are {todoCtx?.todos.length} todos left!</h1>
    </header>
  );
};

export default TodoHeader;
