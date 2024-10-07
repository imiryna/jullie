import { Schema } from "mongoose";
import mongoose from "mongoose";

const todoSchema = new Schema({
  type: {
    type: String,
    enum: ["#todo", "#tobuy", "#towatch"],
    default: "#todo",
  },
  title: {
    type: String,
    required: [true, "Set name for todo"],
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = mongoose.model("Todo", todoSchema);
