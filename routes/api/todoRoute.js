import express from "express";
import { getAllTodo } from "../../controllers/todoController";

const router = express.Router();

router.get("/todo", getAllTodo);
