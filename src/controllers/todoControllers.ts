import { RequestHandler } from "express";
import { Todo } from "../classes/classes";

const TODOS: Todo[] = [];

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ TODOS });
};

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "Create todo", newTodo });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  const { text, completed } = req.body as {
    text?: string;
    completed?: boolean;
  };
  const todoIdx = TODOS.findIndex((todo) => todo.id === id);
  if (todoIdx < 0) {
    res.status(201).json({ message: "Todo not found" });
  } else {
    text ? (TODOS[todoIdx].text = text) : null;
    completed ? (TODOS[todoIdx].completed = completed) : null;
    res.status(201).json({ message: "Created todo" });
  }
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  const todoIdx = TODOS.findIndex((todo) => todo.id === id);
  if (todoIdx < 0) {
    res.status(201).json({ message: "Todo not found" });
  } else {
    TODOS.splice(todoIdx, 1);
    res.status(201).json({ message: "Deleted todo" });
  }
};
