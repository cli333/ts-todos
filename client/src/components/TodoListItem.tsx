import React from "react";
import { ITodo } from "../interfaces/interfaces";
import useTodoListItem from "../hooks/useTodoListItem";

const TodoListItem: React.FC<ITodo> = ({ id, text, completed }) => {
  const [display, setDisplay] = React.useState<boolean>(false);
  const [inputText, setInputText] = React.useState<string>(text);
  const [inputCompleted, setInputCompleted] = React.useState<boolean>(
    completed
  );
  const { handleUpdate } = useTodoListItem({ id, text, completed, setDisplay });

  return (
    <div>
      <span>Id: {id}</span>
      <span>
        Text:{" "}
        <span style={{ textDecoration: completed ? "line-through" : "" }}>
          {text}
        </span>
        {display && (
          <form onSubmit={(e) => handleUpdate(e)}>
            <label htmlFor="text">Text</label>
            <input
              name="text"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <label htmlFor="completed">Completed</label>
            <input
              name="completed"
              type="checkbox"
              checked={inputCompleted}
              onChange={() => setInputCompleted(!inputCompleted)}
            />
            <button>Submit</button>
          </form>
        )}
        <button onClick={() => setDisplay((prevState) => !prevState)}>
          {display ? "Close Editor" : "Open Editor"}
        </button>
      </span>
    </div>
  );
};

export default TodoListItem;
