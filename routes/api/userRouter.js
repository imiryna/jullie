import express from "express";
import { getUsers, getOneUserBiId, createNewUser, updateUser, userDeleted } from "../../controllers/userController.js";
import { validateUserUpdate, checkUserId } from "../../middlewares/userMiddleware.js";

export const router = express.Router();

router.get("/", getUsers);

router.post("/", createNewUser);

router.get("/users/:id", checkUserId, getOneUserBiId);

router.patch("/users/:id", validateUserUpdate, checkUserId, updateUser);

router.delete("/users/:id", checkUserId, userDeleted);
