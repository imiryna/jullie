import { getTodoList, createTodo, getTodoBiId, updateTodoBiId, deleteTodo } from "../services/todoService.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllTodo = catchAsync(async (req, res) => {
  const { todos, total } = await getTodoList(req.query, req.user);

  res.status(200).json({
    message: "Success",
    todos,
    total,
    user: req.user,
  });
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
  const newTodo = await createTodo(req.body, req.user);

  res.status(201).json({
    message: "Success",
    newTodo,
  });
});

export const updateTodo = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority } = req.body;

  const updatedTodo = await updateTodoBiId(id, req.body);

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
