import Joi from "joi";
import joiValidator from "./joiValidator.js";

export const createUserDataValidator = joiValidator((data) => {
  Joi.object().keys(
    {
      username: Joi.string().alphanum().min(3).max(30).required(),
      name: Joi.string.min(3).max(24).required(),
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

      repeat_password: Joi.ref("password"),
    }.validate(data)
  );
});

export const signupUserDataValidator = joiValidator((data) => {
  Joi.object().keys(
    {
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

      repeat_password: Joi.ref("password"),

      access_token: [Joi.string(), Joi.number()],
    }.validate(data)
  );
});

export const updateUserDataValidator = joiValidator((data) => {
  Joi.object().keys(
    {
      name: Joi.string.min(3).max(24),
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    }.validate(data)
  );
});
