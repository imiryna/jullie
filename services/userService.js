import { UsersModel } from "../models/userModel.js";

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

export const updatedUser = async (req, res) => {
  try {
    const { id } = req.params.id;
    const userData = req.body;

    const updatedUser = await UsersModel.findByIdAndUpdate(id, userData, { new: true, runValidators: true });

    res.status(200).json({
      msg: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params.id;
    await UsersModel.deleteOne(id);

    res.status(404);
  } catch (error) {}
};
