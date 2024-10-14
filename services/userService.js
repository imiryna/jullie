import { Types } from "mongoose";
import { UsersModel } from "../models/userModel.js";
import { signupToken } from "./jwtService.js";
import HttpError from "../utils/httpError.js";

// get users

export const getAllUsers = () => UsersModel.find();

export const getUserBiId = (id) => UsersModel.findById(id);

/**
 * create new user
 * @param {Object} userData
 * @returns {Promis(User)}
 */

export const createUser = async (userData) => {
  const newUser = await UsersModel(userData);

  newUser.password = undefined;

  return newUser;
};

export const updatedUser = async (id, userData) => {
  const user = await UsersModel.findById(id);

  Object.keys(userData).forEach((key) => {
    user[key] = userData[key];
  });
  return user.save();
};

export const deleteUser = (id) => UsersModel.deleteOne(id);

export const checkUserExists = async (filter) => {
  const oneExists = await UsersModel.exists(filter);

  if (oneExists) throw new HttpError(409, "User exists");
};

export const checkUserExistsBiId = async (id) => {
  const idIsValid = await Types.ObjectId.isValid(id);

  if (!idIsValid) throw new HttpError(404, "User not found");

  const userExists = await UsersModel.exists({ _id: id });

  if (!userExists) throw new HttpError(404, "User not found");
};

export const signupUser = async (data) => {
  const newUserData = { ...data };

  const newUser = await UsersModel.create(newUserData);

  newUser.password = undefined;

  const token = signupToken(newUser.id);

  return {
    user: newUser,
    token,
  };
};
export const loginUser = async ({ email, password }) => {
  const user = await UsersModel.findOne({ email }).select("+password");

  if (!user) throw new HttpError(401, "Not authorized");

  const passwordIsValid = user.checkPassword(password, user.password);

  if (!passwordIsValid) throw new HttpError(401, "Not authorized");

  user.password = undefined;

  const token = signupToken(user.id);

  return {
    user,
    token,
  };
};
