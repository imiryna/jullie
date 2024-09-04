// import { model } from "mongoose";
import { TodoModel } from "../models/todoModel.js";
// import { getTodoList, createTodo } from "../services/todoService.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllTodo = catchAsync(async (req, res) => {
  const allTodo = await TodoModel.find();

  res.status(200).json(allTodo);
});

export const getTodoBiId = catchAsync(async (req, res) => {
  res.status(200).json({
    message: "Success",
    todo: req.todo,
  });
});

export const createNewTodo = catchAsync(async (req, res) => {
  const { name, description, dueDate, priority } = req.body;

  // req.body validation
  if (!name || !description || !dueDate || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }

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
  const { name, description, dueDate, priority } = req.body;

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

//export { getAllTodo };
// module.exports = getAllTodo;
