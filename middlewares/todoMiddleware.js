import { Types } from "mongoose";
import { TodoModel } from "../models/todoModel.js";
import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { createTodoDataValidator, updateTodoDataValidator } from "../utils/todoValidator.js";
import { todoIsExists } from "../services/todoService.js";

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

export const validateTodoCreate = catchAsync(async (req, res, next) => {
  const { value, error } = createTodoDataValidator(req.body);
  await todoIsExists({ title: value.title, _id: { $ne: req.params.id } });

  if (error) throw new HttpError(400, "Invalid todo data");

  req.body = value;

  next();
});

export const validateTodoUpdate = catchAsync(async (req, res, next) => {
  const { value, error } = updateTodoDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid todo data");

  req.body = value;

  next();
});
