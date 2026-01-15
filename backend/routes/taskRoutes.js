const express = require('express');
const router = express.Router();
const Task = require('../model/Task');


// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// POST create new task
router.post('/', async (req, res) => {
  try {
    const { taskText } = req.body;
    const newTask = await Task.create({ taskText });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// PUT update task
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { taskText, completed } = req.body;
    
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    await task.update({ taskText, completed });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;