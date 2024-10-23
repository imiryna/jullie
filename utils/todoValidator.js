import Joi from "joi";

export const createTodoDataValidator = (data) => {
  return Joi.object({
    title: Joi.string().min(3).max(40).required(),
    description: Joi.string().min(5),
    dueDate: Joi.date(),
    priority: Joi.string(),
  }).validate(data);
};

export const updateTodoDataValidator = (data) => {
  return Joi.object()
    .keys({
      title: Joi.string().min(3).max(12).required(),
      description: Joi.string().min(5),
      dueDate: Joi.date(),
      priority: Joi.string(),
    })
    .validate(data);
};
