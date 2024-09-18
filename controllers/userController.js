import { catchAsync } from "../utils/catchAsync.js";
import HttpError from "../utils/httpError.js";
import { getAllUsers, getUserBiId, createUser, updatedUser, deleteUser } from "../services/userService.js";

export const getUsers = catchAsync(async (req, res) => {
  const users = await getAllUsers();

  res.status(200).json(users);
});

export const 
