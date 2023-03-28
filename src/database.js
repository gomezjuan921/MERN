const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo")
.then(db => console.log('db connect'))
.catch(err => console.log(err));
