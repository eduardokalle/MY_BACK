const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find();
    //console.log(tasks);
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const users = await User.findById(req.params.id);
    //console.log(tasks);
    res.json(users);
});

router.post('/', async (req, res) => {
    const { name,mail,pass } = req.body;
    const users = new User({ name , mail , pass  });
    try {
        await users.save();
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }    
    res.json({ status: 'user save ', users });
});


module.exports = router;