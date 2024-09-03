export const checkTodoId = async (req, res, next) => {
  const { id } = req.params;

  const todo = await TodoModel.findById(id);

  if (!todo) {
    return res.status(404).json({ msg: "Todo is unavailable" });
  }

  req.todo = todo;

  next();
};
