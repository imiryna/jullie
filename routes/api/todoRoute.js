import express from "express";
import { getAllTodo, createNewTodo, getOneTodoBiId, updateTodo, deleteTodo } from "../../controllers/todoController.js";
import { validateTodoUpdate, checkTodoId } from "../../middlewares/todomiddlewar.js";

const router = express.Router();

//create REST API

router.get("/", getAllTodo);

router.post("/", createNewTodo);

router.get("/todos/:id", checkTodoId, getOneTodoBiId);

router.patch("/todos/:id", validateTodoUpdate, checkTodoId, updateTodo);

router.delete("/todos/:id", checkTodoId, deleteTodo);

export default router;
