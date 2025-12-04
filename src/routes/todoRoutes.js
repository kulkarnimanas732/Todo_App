const express = require('express');
const {
  createTodo,
  getTodos,
  updateTodoStatus,
  deleteTodo,
} = require('../controllers/todoController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createTodo);
router.get('/', protect, getTodos);
router.patch('/:id', protect, updateTodoStatus);
router.delete('/:id', protect, deleteTodo);

module.exports = router;
