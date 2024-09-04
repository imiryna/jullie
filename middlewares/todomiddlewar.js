import { TodoModel } from "../models/todoModel.js";

export const checkTodoId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo is unavailable" });
    }

    req.todo = todo;

    next();
  } catch (error) {
    next(error);
  }
};

export const validateTodoUpdate = async (req, res, next) => {
  try {
    //   const { id } = req.params;
    const { name, description, dueDate, priority } = req.body;

    //check whether all of filds present

    if (!name || !description || !dueDate || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //   checkTodoId();

    next();
  } catch (error) {
    next(error);
  }
};
