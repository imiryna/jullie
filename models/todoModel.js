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
  },
  priority: {
    type: String,
    enum: ["low" | "middle" | "high"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = model("user", usersSchema);

module.exports = TodoModel;
