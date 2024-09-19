import { TodoModel } from "../models/todoModel.js";

// get todo list

export const getTodoList = async (req, res) => {
  try {
    const todos = await TodoModel.find(); // To find all todos into database

    res.status(200).json({
      msg: "Successfully",
      todo: todos,
    });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving todos", error });
  }
};

export const getTodoBiId = async (req, res) => {
  try {
    const todoBiId = await TodoModel.findById(req.params.id);

    res.status(200).json({
      msg: "Successfully",
      todo: todoBiId,
    });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving todo", error });
  }
};

// Create new todo

export const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: "Error creating todo", error });
  }
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
