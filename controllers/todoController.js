import { model } from "mongoose";
// import { getTodoList, createTodo } from "../services/todoService.js";

export const getAllTodo = async (req, res) => {
  try {
    const allTodo = await TodoModel.find();

    res.status(200).json(allTodo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTodoBiId = async (req, res) => {
  try {
    const { id } = req.params.id;
    const allTodo = await TodoModel.find();

    const todo = allTodo.find((item) => {
      item.id === id;
    });
    res.status(200).json({
      message: "Success",
      todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNewTodo = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//export { getAllTodo };
// module.exports = getAllTodo;
