const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    //console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    //console.log(tasks);
    res.json(task);
});

router.post('/', async (req, res) => {
    const { name, old, address } = req.body;
    const task = new Task({ name, old, address });
    try {
        await task.save();
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }    
    res.json({ status: 'task save ', task });
});

router.put('/:id', async (req, res) => {
    const { name, old, address } = req.body;
    const newTask = { name, old, address };
    try {
        await Task.findByIdAndUpdate(req.params.id, newTask);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }    
    res.json({ status: 'task updated ', task: {
        ...newTask,
        _id: req.params.id
    } });
});

router.delete('/:id', async (req, res) => {
    await Task.findOneAndDelete(req.params.id);
    res.json({ status: 'task deleted ' });
});

module.exports = router;