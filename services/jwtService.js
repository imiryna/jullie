import jwt from "jsonwebtoken";
import { serverConfig } from "../config/serverConfig.js";
import HttpError from "../utils/httpError.js";
const { sign, verify } = jwt;

export const signupToken = (id) => {
  jwt.sign({ id }, serverConfig.jwtSecret, { expiresIn: serverConfig.jwtExpare });
};

export const checkToken = (token) => {
  if (!token) throw new HttpError(401, "Not login in");

  try {
    const { id } = jwt.verify(token, serverConfig.jwtSecret);

    return id;
  } catch (error) {
    throw new HttpError(401, "Not login in");
  }
};
