import Joi from "joi";

export const createTodoDataValidator = (data) => {
  Joi.object().keys(
    {
      name: Joi.string.min(3).max(12).required(),
      description: Joi.string().min(5).required(),
      dueDate: Joi.date(),
      priority: Joi.string(),
    }.validation(date)
  );
};

export const updateTodoDataValidator = (data) => {
  Joi.object().keys(
    {
      name: Joi.string.min(3).max(12).required(),
      description: Joi.string().min(5),
      dueDate: Joi.date(),
      priority: Joi.string(),
    }.validation(date)
  );
};
