import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router as todoRouter } from "./routes/api/todoRouter.js";
import { router as userRouter } from "./routes/api/userRouter.js";
import { router as authRouter } from "./routes/api/authRouter.js";
import { globalErrorHandler } from "./controllers/errorController.js";
// import { OAuth2Client } from "google-auth-library";
//swagger

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json" assert { type: "json" };

dotenv.config({
  // path: process.env.NODE_ENV === 'production'? './envs/production.env' ? './envs/development.env'
});

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

//setup cookies
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["your_secret_key"],
//     maxAge: 24 * 60 * 60 * 1000, // 24 h
//   })
// );

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// =============================
const pathPrefix = "/api/v1";

app.use(`/api/v1/todos`, todoRouter);
app.use(`/api/v1/users`, userRouter);
app.use(`/api/v1/auth`, authRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//== Error handler =============

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(globalErrorHandler);

export default app;
