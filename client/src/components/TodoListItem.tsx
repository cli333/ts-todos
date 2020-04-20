import React, { useState } from "react";
import useTodoListItem from "../hooks/useTodoListItem";

interface TodoListItemProps {
  id: string;
  text: string;
}

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  const { id, text } = props;
  const [display, setDisplay] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const { handleDelete, handleUpdate } = useTodoListItem(input, setInput);

  return (
    <li>
      {text}
      {display && (
        <form
          onSubmit={(e) => {
            handleUpdate(e, id, input);
            setDisplay(!display);
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <button onClick={() => setDisplay(!display)}>
        {!display ? "Update" : "Hide"}
      </button>
      <form onSubmit={(e) => handleDelete(e, id)}>
        <button type="submit">X</button>
      </form>
    </li>
  );
};

export default TodoListItem;
