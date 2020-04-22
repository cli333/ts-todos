import React from "react";
import axios from "axios";
import { TodoCtx } from "../context/TodoProvider";

export default (
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>
) => {
  const todoCtx = React.useContext(TodoCtx);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("/todos", { text })
      .then((res) => {
        todoCtx?.getTodos();
        setText("");
      })
      .catch((err) => console.log(err));
  };

  return {
    handleCreate,
  };
};
