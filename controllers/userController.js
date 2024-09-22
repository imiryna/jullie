import { catchAsync } from "../utils/catchAsync.js";
import HttpError from "../utils/httpError.js";
import { getAllUsers, getUserBiId, createUser, updatedUser, deleteUser } from "../services/userService.js";
import { updateUserDataValidator } from "../utils/userValidator.js";

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

export const updateUser = catchAsync(async (req, res) => {
  const { value, error } = updateUserDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid user data");

  const { id } = req.params;

  const user = await updatedUser(id, value);

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
