import React from "react";
import axios from "axios";

const useTodoListItem = (input: string, setInput: Function) => {
  const validate = (input: string) => {
    if (input.length < 5) {
      alert("Too short! Please try again!");
      return false;
    } else {
      return true;
    }
  };

  const handleUpdate = (e: React.FormEvent, id: string, text: string) => {
    e.preventDefault();
    if (validate(input)) {
      axios
        .patch(`http://localhost:5000/todos/${id}`, { text })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      setInput("");
    }
  };

  const handleDelete = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return {
    handleDelete,
    handleUpdate,
  };
};

export default useTodoListItem;
