import express from "express";
import { createNewTodo, getTodoBiId, updateTodo } from "../../controllers/todoController.js";
import { validateTodoUpdate, checkTodoId } from "../../middlewares/todomiddlewar.js";

const router = express.Router();

// TodoRouter.get("/", getAllTodo);

//create REST API

router.get("/todos");

router.post("/", createNewTodo);

router.get("/todos/:id", checkTodoId, getTodoBiId);

router.patch("/todos/", validateTodoUpdate, updateTodo);

//router.delete();

export { router };
