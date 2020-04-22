import React from "react";
import useTodoForm from "../hooks/useTodoForm";

const TodoForm: React.FC = () => {
  const [text, setText] = React.useState<string>("");
  const { handleCreate } = useTodoForm(text, setText);

  return (
    <form onSubmit={(e) => handleCreate(e)}>
      <input
        required
        type="text"
        placeholder="name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
};

export default TodoForm;
