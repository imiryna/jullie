import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { TodoRouter } from "./routes/api/todoRoute.js";
import { TodoModel } from "./models/index.js";

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}
connectToDatabase();
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/todo", TodoRouter);

//create REST API

app.post("/todos", async (req, res) => {
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
});

app.get("/todos", async (req, res) => {
  try {
    const allTodo = await TodoModel.find();

    res.status(200).json(allTodo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/todos/:id", async (req, res) => {
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
});

app.patch();

app.delete();

// =============================

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log("babaaam");
  res.status(err.status).json({ message: err.message });
});

export default app;
