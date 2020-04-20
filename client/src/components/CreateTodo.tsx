import React, { useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";

const CreateTodo: React.FC = () => {
  const [input, setInput] = useState("");
  const { handleSubmit } = useCreateTodo(input, setInput);

  return (
    <form style={{ border: "1px solid red" }} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Todo Name:</label>
      <input
        name="name"
        type="text"
        placeholder="Enter a name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTodo;
