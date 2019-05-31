const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

// Settings

app.set('port',process.env.PORT || 4000);

// Middelwares

app.use(morgan('dev'));
app.use(express.json());

// Routes 

app.use('/api/tasks' , require('./routes/task.routes'));

//Static files

//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

//starting the server

app.listen(4000, () =>{

    console.log('server on port 4000');
});