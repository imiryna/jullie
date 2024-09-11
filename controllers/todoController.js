// import { model } from "mongoose";
// import { TodoModel } from "../models/todoModel.js";
import { getTodoList } from "../services/todoService.js";
import { catchAsync } from "../utils/catchAsync.js";
import HttpError from "../utils/httpError.js";

import { cresteTodoDataValidator, updateTodoDataValidator } from "../utils/todoValidator.js";

export const getAllTodo = catchAsync(async (req, res) => {
  const allTodo = await getTodoList();

  res.status(200).json(allTodo);
});

export const getTodoBiId = catchAsync(async (req, res) => {
  res.status(200).json({
    message: "Success",
    todo: req.todo,
  });
});

export const createNewTodo = catchAsync(async (req, res) => {
  const { value, error } = cresteTodoDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid todo data");

  const { name, description, dueDate, priority } = value;

  const newTodo = {
    name,
    description,
    dueDate,
    priority,
  };

  //save newTodo to DB
  const saveTodo = TodoModel.create(newTodo);

  res.status(201).json(saveTodo);
});

export const updateTodo = catchAsync(async (req, res) => {
  const { value, error } = updateTodoDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid todo data");

  const { name, description, dueDate, priority } = value;

  const updatedTodo = await TodoModel.findByIdAndUpdate(
    req.todo._id,
    {
      name,
      description,
      dueDate,
      priority,
    },
    { new: true }
  );

  res.status(200).json({
    message: "Todo updated successfully",
    todo: updatedTodo,
  });
});
