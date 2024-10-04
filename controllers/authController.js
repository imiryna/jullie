import { signupUser } from "../services/userService.js";
import { catchAsync } from "../utils/catchAsync.js";

export const signup = catchAsync(async (req, res) => {
  const { user, token } = await signupUser(rqe.body);

  res.status(201).json({
    message: "Success",
    user,
    token,
  });
});

export const login = catchAsync(async (req, res) => {});
