import { TodoModel } from "../models/todoModel.js";

// get todo list

export const getTodoList = async () => {
  try {
    const todos = await TodoModel.find(); // To find all todos into database

    return todos;
  } catch (error) {
    console.log("catch");
    res.status(500).json({ message: "Error retrieving users", error });
  }
};

export const getTodoBiId = async (req, res) => {
  try {
    const todoBiId = await TodoModel.findById(req.params.id);

    return todoBiId;
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
};

// Create new todo

export const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save();
    res.status(201).json(newTodo); // Відправити інформацію про створеного користувача
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

export const updateTodoBiId = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedOne = await TodoModel.findByIdAndUpdate(id, updatedData);

    res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedOne,
    });
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error });
  }
};

// Delete todo bi ID

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTodo = await TodoModel.deleteOne({ _id: new ObjectId(id) });
    res.status(201).json(oneTodo);
  } catch (error) {
    res.status(400).json({ message: "Error delete user", error });
  }
};

// export const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id); // Видалити користувача
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// };
