const mongoose = require ('mongoose');

const URI = 'mongodb://localhost/my_app';

//mongoose.connect()

mongoose.connect(URI)
     .then(db=> console.log('bd is connected'))
     .catch(err => console.log(err));


module.exports = mongoose;  
