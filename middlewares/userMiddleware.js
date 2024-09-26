import { createUserDataValidator, updateUserDataValidator } from "../utils/userValidator.js";
import { Types } from "mongoose";
import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { checkUserExists, getUserBiId } from "../services/userService.js";

export const checkUserId = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const userValid = await new Types.ObjectId.isValid();

  if (!userValid) throw new HttpError(404, "User not found");

  const user = getUserBiId(id);

  if (!user) throw new HttpError(404, "User is unavailable");

  req.user = user;

  next();
});

export const checkCreateUserData = catchAsync(async (req, res, next) => {
  const { value, error } = createUserDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid user data");

  const userExists = await checkUserExists({ email: value.email, _id: { $ne: req.params.id } });

  if (userExists) {
    throw new HttpError(400, "User with this email exists");
  }

  req.body = value;

  next();
});

export const validateUserUpdate = catchAsync(async (req, res, next) => {
  const { value, error } = updateUserDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid user data");

  await checkUserExists({ email: value.email, _id: { $ne: req.params.id } });

  req.body = value;

  next();
});
