"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes/classes");
const TODOS = [];
exports.getTodos = (req, res, next) => {
    res.status(201).json({ TODOS });
};
exports.createTodo = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new classes_1.Todo(text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Create todo", newTodo });
};
exports.updateTodo = (req, res, next) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    const todoIdx = TODOS.findIndex((todo) => todo.id === id);
    if (todoIdx < 0) {
        res.status(201).json({ message: "Todo not found" });
    }
    else {
        console.log("inside the update", { text, completed });
        text ? (TODOS[todoIdx].text = text) : null;
        completed ? (TODOS[todoIdx].completed = completed) : null;
        res.status(201).json({ message: "Created todo" });
    }
};
exports.deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const todoIdx = TODOS.findIndex((todo) => todo.id === id);
    if (todoIdx < 0) {
        res.status(201).json({ message: "Todo not found" });
    }
    else {
        TODOS.splice(todoIdx, 1);
        res.status(201).json({ message: "Deleted todo" });
    }
};
