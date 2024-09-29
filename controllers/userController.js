import { catchAsync } from "../utils/catchAsync.js";
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
  const { password, ...restUserData } = req.body;

  const userData = await createUser({
    password: passwordHash,
    ...restUserData,
  });

  res.status(201).json({
    message: "Success",
    userData,
  });
});

export const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = await updatedUser(id, req.body);

  res.status(200).json({
    msg: "User updated successfully",
    user: user,
  });
});

export const userDeleted = catchAsync(async (req, res) => {
  const user = await deleteUser(req.params.id);
  res.status(200).json({
    msg: "User deleted successfully",
    user: user,
  });
});
