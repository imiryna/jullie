exports.getAllTodo = async (req, res, next) => {
  try {
    const result = await services.getTodoList(req.query, req.user);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
