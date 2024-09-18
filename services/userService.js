import { UsersModel } from "../models/userModel";

// get users

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UsersModel.find();

    res.status(200).json({
      msg: "Successfully",
    });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving users", error });
  }
};

export const getUserBiId = async (req, res) => {
  try {
    const userBiId = await UsersModel.findById(req.params.id);

    res.status(200).json({
      msg: "Successfully",
      user: userBiId,
    });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving user", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = new UsersModel(req.body);
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
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
