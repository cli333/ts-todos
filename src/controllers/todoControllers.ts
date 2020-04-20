import { RequestHandler } from "express";
import { Todo } from "../models/todoModels";

const TODOS: Todo[] = [];

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ TODOS });
};

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo: Todo = { id: Math.random().toString(), text };
  TODOS.push(newTodo);
  res.status(201).json({ message: "Create todo", newTodo });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body as { text: string };
  const todoIdx = TODOS.findIndex((todo) => todo.id === id);
  if (todoIdx < 0) {
    res.status(201).json({ message: "Todo not found" });
  } else {
    TODOS.forEach((todo) => (todo.id === id ? (todo.text = text) : todo));
    res.status(201).json({ message: "Created todo" });
  }
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  const todoIdx = TODOS.findIndex((todo) => todo.id === id);
  if (todoIdx < 0) {
    res.status(201).json({ message: "Todo not found" });
  } else {
    TODOS.splice(todoIdx, 1);
    res.status(201).json({ message: "Deleted todo" });
  }
};
