const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//init the app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/jobSearch');

mongoose.Promise = global.Promise;
app.use(bodyParser.json());

//init routes
app.use('/api', require('./routes/api'))

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 4000, () => {
    console.log('ready for accept request');
});
