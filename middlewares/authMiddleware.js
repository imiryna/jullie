import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { loginUserDataValidator, signupUserDataValidator } from "../utils/userValidator.js";
import { checkUserExists, getUserBiId } from "../services/userService.js";
import { checkToken } from "../services/jwtService.js";

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

export const protect = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.startWith("Bearer ") && req.headers.authorization.split(" ")[1];

  const userId = checkToken(token);
  if (!userId) throw new HttpError(401, "Not logged id..");

  const currentUser = await getUserBiId(userId);

  if (!currentUser) throw new HttpError(401, "Not logged id..");

  req.user = currentUser;
});
