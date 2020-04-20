"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoControllers_1 = require("../controllers/todoControllers");
const router = express_1.Router();
// get all todos
router.get("/", todoControllers_1.getTodos);
// create a todo
router.post("/", todoControllers_1.createTodo);
// update a todo
router.patch("/:id", todoControllers_1.updateTodo);
// delete a todo
router.delete("/:id", todoControllers_1.deleteTodo);
exports.default = router;
