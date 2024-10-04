import { Router } from "express";
import { checkSignupData } from "../../middlewares/authMiddleware.js";
import { login, signup } from "../../controllers/authController.js";

export const router = Router();

router.post("/signup", checkSignupData, signup);
router.post("/login", login);
