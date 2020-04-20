import React from "react";
import axios from "axios";

const useCreateTodo = (input: string, setInput: Function) => {
  const validate = (input: string) => {
    if (input.length < 5) {
      alert("Too short! Please try again!");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(input)) {
      axios
        .post("http://localhost:5000/todos", { text: input })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      setInput("");
    }
  };

  return {
    handleSubmit,
  };
};

export default useCreateTodo;
