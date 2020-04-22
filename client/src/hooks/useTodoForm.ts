import React from "react";
import axios from "axios";

export default (
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("/todos", { text })
      .then((res) => {
        console.log(res);
        // update todo list
        setText("");
      })
      .catch((err) => console.log(err));
  };

  return {
    handleCreate,
  };
};
