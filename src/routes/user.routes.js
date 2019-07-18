const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/signup', async (req, res) => {
    const users = await User.find();
    //console.log(tasks);
    res.json(users);
});


router.post('/signup', async (req, res) => {
    const { name,email,pass } = req.body;
    const users = new User({ name , email , pass  });
    try {
        await users.save();
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }    
    res.json({ status: 'user save ', users });
});

router.delete('/:id', async (req, res) => {
    await Task.findOneAndDelete(req.params.id);
    res.json({ status: 'user deleted ' });
});

router.post('/signin', async (req, res) => {
    const { email, pass } = req.body;    
    try {
        const user = await User.findOne({ 
            $and: [
                { email }, 
                { pass }
            ] 
        })
        if (user) {
            res.json({
                status: "User login",
                user,
                message: "Valid user"
            })
        }else {
            res.json({
                status: "Not login",
                message: "User or password not valid"
            })
        }   
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }    
});


module.exports = router;