import { TodoModel } from "../models/todoModel.js";
import HttpError from "../utils/httpError.js";

export const checkTodoId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await TodoModel.findById(id);

    if (!todo) {
      throw new HttpError(404, "Todo is unavailable");
    }

    req.todo = todo;

    next();
  } catch (error) {
    next(error);
  }
};

export const validateTodoUpdate = async (req, res, next) => {
  try {
    const { name, description, dueDate, priority } = req.body;

    if (!name || !description || !dueDate || !priority) {
      throw new HttpError(400, "All fields are required");
    }

    next();
  } catch (error) {
    next(error);
  }
};
