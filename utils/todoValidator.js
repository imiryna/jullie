import Joi from "joi";

export const createTodoDataValidator = (data) => {
  return Joi.object({
    type: Joi.string().required(),
    title: Joi.string().min(3).max(40).required(),
    description: Joi.string().min(5),
    dueDate: Joi.date(),
    priority: Joi.string(),
  }).validate(data);
};

export const updateTodoDataValidator = (data) => {
  Joi.object().keys(
    {
      name: Joi.string().min(3).max(12).required(),
      description: Joi.string().min(5),
      dueDate: Joi.date(),
      priority: Joi.string(),
    }.validate(data)
  );
};
