import { model, Schema } from "mongoose";

const todoSchema = new Schema({
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
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = model("todo", todoSchema);

export { TodoModel };
