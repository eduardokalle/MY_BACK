const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req , res) => {

    const tasks = await Task.find();
    //console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req , res) => {

    const task = await Task.findById(req.params.id);
    //console.log(tasks);
    res.json(task);
});

router.post('/', async (req , res) =>{
      const {name,old,address} = req.body;
      const task = new Task ({name,old,address});
      await task.save();
      res.json({status: 'task save '});


});

router.put('/:id', async (req , res) =>{
    const {name,old,address} = req.body;
    const newTask = {name,old,address};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'task updated '});

});

router.delete('/:id', async (req , res) =>{
    await Task.findOneAndDelete(req.params.id);
    res.json({status: 'task deleted '});
});

module.exports = router;