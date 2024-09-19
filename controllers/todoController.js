import { updateTodoDataValidator } from "../utils/todoValidator.js";
import { getTodoList, createTodo, getTodoBiId, updateTodoBiId, deleteTodo } from "../services/todoService.js";
import { catchAsync } from "../utils/catchAsync.js";
import HttpError from "../utils/httpError.js";

export const getAllTodo = catchAsync(async (req, res) => {
  const allTodo = await getTodoList();

  res.status(200).json(allTodo);
});

export const getOneTodoBiId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const oneTodo = await getTodoBiId(id);
  res.status(200).json({
    message: "Success",
    todo: oneTodo,
  });
});

export const createNewTodo = catchAsync(async (req, res) => {
  const newTodo = await createTodo(req.body);

  res.status(201).json({
    message: "Success",
    newTodo,
  });
});

export const updateTodo = catchAsync(async (req, res) => {
  const { value, error } = updateTodoDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid todo data");

  // const { name, description, dueDate, priority } = value;

  const { id } = req.params;

  const updatedTodo = await updateTodoBiId(id, value);

  res.status(200).json({
    message: "Todo updated successfully",
    todo: updatedTodo,
  });
  next();
});

export const getTodo = catchAsync(async (req, res) => {
  const todo = await TodoModel.findById(req.params.id);
  res.status(200).json({
    message: "Todo updated successfully",
    todo: todo,
  });
});

export const todoDeleted = catchAsync(async (req, res) => {
  const todo = await deleteTodo(req.params.id);

  res.status(200).json({
    message: "Todo updated successfully",
    todo: todo,
  });
});
