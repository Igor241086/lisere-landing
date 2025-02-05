const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/todos', async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put('/todos/:id', async (req, res) => {
    try {
      const { text, completed } = req.body;
      const todo = await Todo.findByIdAndUpdate(req.params.id, { text, completed }, { new: true });
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      res.json(todo);
    } catch (err) {
      console.error("Error updating todo:", err);
      res.status(500).json({ error: err.message });
    }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;