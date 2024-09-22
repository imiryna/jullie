import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router as todoRouter } from "./routes/api/todoRoute.js";
import { router as userRouter } from "./routes/api/userRouter.js";

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

// =============================
const pathPrefix = "/api/v1";

app.use(`${pathPrefix}/todos`, todoRouter);
app.use(`${pathPrefix}/users`, userRouter);

//== Error handler =============

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({ message: err.message });
});

export default app;
