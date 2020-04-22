import React from "react";
import { ITodo } from "../interfaces/interfaces";
import TodoListItem from "./TodoListItem";

const TODOS: ITodo[] = [
  { id: "1", text: "first todo", completed: false },
  { id: "2", text: "second todo", completed: true },
];

const TodoList: React.FC = () => {
  return (
    <ul>
      {TODOS.map((todo: ITodo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
