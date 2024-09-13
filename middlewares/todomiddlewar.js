import { Types } from "mongoose";
import { TodoModel } from "../models/todoModel.js";
import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { cresteTodoDataValidator, updateTodoDataValidator } from "../utils/todoValidator.js";

export const checkTodoId = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const idValidate = Types.ObjectId.isValid();

  if (!idValidate) throw new HttpError(404, "Todo not found");

  const todo = await TodoModel.findById(id);

  if (!todo) {
    throw new HttpError(404, "Todo is unavailable");
  }

  req.todo = todo;

  next();
});

export const validateTodoUpdate = catchAsync(async (req, res, next) => {
  // const { name, description, dueDate, priority } = req.body;

  const { value, error } = cresteTodoDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid todo data");

  if (!name || !description || !dueDate || !priority) {
    throw new HttpError(400, "All fields are required");
  }

  req.body = value;

  next();
});
