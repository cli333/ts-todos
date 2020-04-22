import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
