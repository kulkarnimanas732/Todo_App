const Todo = require('../models/Todo');

const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      res.status(400);
      throw new Error('Title is required');
    }

    const todo = await Todo.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [todos, total] = await Promise.all([
      Todo.find({ user: req.user._id })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Todo.countDocuments({ user: req.user._id }),
    ]);

    res.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};

const updateTodoStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'completed'].includes(status)) {
      res.status(400);
      throw new Error('Status must be pending or completed');
    }

    const todo = await Todo.findOne({ _id: id, user: req.user._id });

    if (!todo) {
      res.status(404);
      throw new Error('Todo not found');
    }

    todo.status = status;
    await todo.save();

    res.json(todo);
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!todo) {
      res.status(404);
      throw new Error('Todo not found');
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodoStatus,
  deleteTodo,
};
