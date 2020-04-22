import React from "react";
import { ITodo } from "../interfaces/interfaces";
import TodoListItem from "./TodoListItem";
import { TodoCtx } from "../context/TodoProvider";

const TodoList: React.FC = () => {
  const todoCtx = React.useContext(TodoCtx);
  return (
    <ul>
      {todoCtx?.todos &&
        todoCtx?.todos.map((todo: ITodo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
    </ul>
  );
};

export default TodoList;
