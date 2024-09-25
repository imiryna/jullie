import { TodoModel } from "../models/todoModel.js";
import { UsersModel } from "../models/userModel.js";
import HttpError from "../utils/httpError.js";

// get todo list

export const getTodoList = () => TodoModel.find(); // To find all todos into database

export const getTodoBiId = (id) => TodoModel.findById(id);

// Create new todo

export const createTodo = async (todoData) => {
  const newTodo = await TodoModel(todoData);

  return newTodo;
};

export const updateTodoBiId = async (id) => {
  const updatedData = req.body;

  const updatedOne = await TodoModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
  return updatedOne;
};

// Delete todo bi ID

export const deleteTodo = (id) => TodoModel.deleteOne(id);

export const checkTodoExists = async (filter) => {
  const oneExists = await TodoModel.exists(filter);

  if (oneExists) throw new HttpError(409, "Todo exists");
};
