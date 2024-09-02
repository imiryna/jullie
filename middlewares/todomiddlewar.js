export const checkTodoId = async (req, res, next) => {
  const { id } = req.params.id;
  const allTodo = await TodoModel.find();

  const todo = allTodo.find((item) => {
    item.id === id;
  });
  if (!todo) {
    return res.status(404).json({ msg: "Todo is unavailable" });
  }
  req.todo = todo;
  next();
};
