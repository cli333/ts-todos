import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
