import { timeStamp } from "console";
import { Schema, Types } from "mongoose";
import mongoose from "mongoose";

const todoSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["#todo", "#tobuy", "#towatch"],
      default: "#todo",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "The description is required"],
    },
    dueDate: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const TodoModel = mongoose.model("Todo", todoSchema);
