import React from "react";
import axios from "axios";

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
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .patch(`/todos/${id}`, { text, completed })
      .then((res) => {
        console.log(res);
        // update todos
        setDisplay((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
  };

  return { handleUpdate };
};
