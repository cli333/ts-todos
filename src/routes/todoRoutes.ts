import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoControllers";
const router = Router();

// get all todos
router.get("/", getTodos);

// create a todo
router.post("/", createTodo);

// update a todo
router.patch("/:id", updateTodo);

// delete a todo
router.delete("/:id", deleteTodo);

export default router;
