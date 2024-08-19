import { model } from "mongoose";
import { getTodoList } from "../services/todoServece";

const getAllTodo = async (req, res, next) => {
  try {
    const result = await getTodoList(req.query, req.user);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllTodo;
