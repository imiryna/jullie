// import { model } from "mongoose";
import { getTodoList, createTodo } from "../services/todoService.js";

// const getAllTodo = async (req, res, next) => {
//   try {
//     const result = await getTodoList(req, res);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const createNewTodo = async (req, res, next) => {
//   try {
//     const result = await createTodo(req, res);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

export { getAllTodo };
// module.exports = getAllTodo;
