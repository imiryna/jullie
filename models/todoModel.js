import { model, Schema } from "mongoose";

const todoModel = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    enam: ["low" | "middle" | "high"],
  },
});
