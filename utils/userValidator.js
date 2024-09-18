import Joi from "joi";

export const createUserDataValidator = (data) => {
  Joi.object().keys(
    {
      username: Joi.string().alphanum().min(3).max(30).required(),
      name: Joi.string.min(3).max(24).required(),
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

      repeat_password: Joi.ref("password"),

      access_token: [Joi.string(), Joi.number()],
    }.validation(date)
  );
};
