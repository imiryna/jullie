import { TodoModel } from "../models/todoModel.js";
import { UsersModel } from "../models/userModel.js";
import HttpError from "../utils/httpError.js";

// get todo list

export const getTodoList = () => TodoModel.find(); // To find all todos into database

export const getTodoBiId = (id) => TodoModel.findById(id);

// Create new todo

export const createTodo = async (todoData) => {
  const newTodo = await TodoModel(todoData);

  return newTodo.save();
};

export const updateTodoBiId = async (id, todoData) => {
  const todo = await TodoModel.findByIdAndUpdate(id);

  Object.keys(todoData).forEach((key) => {
    todo[key] = todoData[key];
  });
  return todo.save();
};

// Delete todo bi ID

export const deleteTodo = (id) => TodoModel.deleteOne(id);

export const todoIsExists = async (filter) => {
  const oneExists = await TodoModel.exists(filter);

  if (oneExists) throw new HttpError(409, "Todo exists");
};
