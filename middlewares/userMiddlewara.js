import { createUserDataValidator } from "../utils/userValidator";
import { Types } from "mongoose";
import { UsersModel } from "../models/userModel";
import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const checkUserId = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const userValid = await new Types.ObjectId.isValid();

  if (!userValid) throw new HttpError(404, "User not found");

  const user = UsersModel.findById(id);

  if (!user) throw new HttpError(404, "User is unavailable");

  req.user = user;

  next();
});

export const validateUserUpdate = catchAsync(async (req, res, next) => {
  const { value, error } = createUserDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid user data");

  if (!name || !email || !password) {
    throw new HttpError(400, "All fields are required");
  }

  req.body = value;

  next();
});
