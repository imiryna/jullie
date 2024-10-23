import { TodoModel } from "../models/todoModel.js";
import { UsersModel } from "../models/userModel.js";
import HttpError from "../utils/httpError.js";

// get todo list

export const getTodoList = async (query, owner) => {
  const findOptions = query.search
    ? {
        $or: [{ title: { $regex: query.search, $options: "i" } }, { description: { $regex: query.search, $options: "i" } }, { owner: { $regex: query.search, $options: "i" } }],
      }
    : {};

  const todosQuery = TodoModel.find(findOptions); // To find all todos into database

  todosQuery.sort("title");

  const todos = await todosQuery;

  return {
    todos,
    total: todos.length,
  };
};

export const getTodoBiId = (id) => TodoModel.findById(id);

// Create new todo

export const createTodo = (todoData, owner) => {
  const { title, description, dueDate } = todoData;

  return TodoModel.create({
    title,
    description,
    dueDate,
    owner,
  });
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
