import React from "react";
import axios from "axios";
import { TodoCtx } from "../context/TodoProvider";

export default ({
  id,
  text,
  completed,
  setDisplay,
}: {
  id: string;
  text?: string;
  completed?: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const todoCtx = React.useContext(TodoCtx);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .patch(`/todos/${id}`, { text, completed })
      .then((res) => {
        todoCtx?.getTodos();
        setDisplay((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: string) => {
    axios
      .delete(`/todos/${id}`)
      .then((res) => {
        todoCtx?.getTodos();
      })
      .catch((err) => console.log(err));
  };

  return { handleUpdate, handleDelete };
};
