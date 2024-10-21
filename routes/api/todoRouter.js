import express from "express";
import { getAllTodo, createNewTodo, getOneTodoBiId, updateTodo, todoDeleted } from "../../controllers/todoController.js";
import { validateTodoCreate, validateTodoUpdate, checkTodoId } from "../../middlewares/todoMiddleware.js";
import { protect } from "../../middlewares/authMiddleware.js";

export const router = express.Router();

//create REST API
router.use(protect);

router.get("/", getAllTodo);

router.post("/", validateTodoCreate, createNewTodo);

router.get("/:id", checkTodoId, getOneTodoBiId);

router.patch("/:id", validateTodoUpdate, checkTodoId, updateTodo);

router.delete("/:id", checkTodoId, todoDeleted);
