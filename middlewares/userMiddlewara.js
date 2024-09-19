import { createUserDataValidator } from "../utils/userValidator";
import { Types } from "mongoose";
import { UsersModel } from "../models/userModel";
import HttpError from "../utils/httpError.js";
import { catchAsync } from "../utils/catchAsync.js";
