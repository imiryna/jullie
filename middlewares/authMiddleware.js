import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { loginUserDataValidator, signupUserDataValidator } from "../utils/userValidator.js";
import { checkUserExists } from "../services/userService.js";

export const checkSignupData = catchAsync(async (req, res, next) => {
  const { value, error } = signupUserDataValidator(req.body);

  if (error) throw new HttpError(400, "Invalid user data", error);

  await checkUserExists({ email: value.email });
  req.body = value;

  next();
});

export const checkLoginData = catchAsync(async (req, res, next) => {
  const { value, error } = await loginUserDataValidator(req.body);

  if (error) throw new HttpError(401, "Not authorized", error);

  req.body = value;

  next();
});
