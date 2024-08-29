import express from "express";
import { createNewTodo } from "../../controllers/todoController.js";

const TodoRouter = express.Router();

// TodoRouter.get("/", getAllTodo);
TodoRouter.post("/", createNewTodo);

// module.exports = router;

export { TodoRouter };
