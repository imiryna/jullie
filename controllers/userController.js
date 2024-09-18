import { catchAsync } from "../utils/catchAsync.js";
import HttpError from "../utils/httpError.js";
import { getAllUsers, getUserBiId, createUser, updatedUser, deleteUser } from "../services/userService.js";

export const getUsers = catchAsync(async (req, res) => {
  const users = await getAllUsers();

  res.status(200).json(users);
});

export const getOneUserBiId = catchAsync(async (req, res) => {
  const { id } = req.params;

  const userBiId = await getUserBiId(id);

  res.status(200).json({
    message: "Success",
    user: userBiId,
  });
});

export const createNewUser = catchAsync(async (req, res) => {
  const userData = await createUser(req.body);

  res.status(201).json({
    message: "Success",
    userData,
  });
});

export const updatedUser = catchAsync(async (req, res) => {});
