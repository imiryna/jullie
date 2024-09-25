import { TodoModel } from "../models/todoModel.js";

// get todo list

export const getTodoList = () => TodoModel.find(); // To find all todos into database

export const getTodoBiId = (id) => TodoModel.findById(id);

// Create new todo

export const createTodo = async (todoData) => {
  const newTodo = await TodoModel(todoData);

  return newTodo;
};

export const updateTodoBiId = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedOne = await TodoModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedOne,
    });
  } catch (error) {
    res.status(400).json({ message: "Error updating todo", error });
  }
};

// Delete todo bi ID

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await TodoModel.deleteOne(id);

    res.status(404);
  } catch (error) {
    res.status(400).json({ message: "Error delete user", error });
  }
};
