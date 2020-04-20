import React from "react";
import TodoBanner from "./components/TodoBanner";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <TodoBanner />
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default App;
