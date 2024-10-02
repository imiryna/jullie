const joiValidator = (validator) => (date) => {
  const { value, error } = validator(data);

  if (!error) return { value };

  return {
    value,
    error: error.details.map((err) => err.message),
  };
};

export default joiValidator;
