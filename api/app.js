//Libraries
const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()

//server configuration
const basePath = '/';
const port = 4000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, `../logs/api-${process.env.JS_BOX_ENVIRONMENT}-access.log`), { flags: 'a' })

// Connection to DB
mongoose.connect('mongodb://mongodb')
    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

// Routes and Backend Funcioncalities
var todoListRoutes = require('./src/routes/todoListRoutes');

// App Instance
var app = express();
app.use((req, res, next) => {
  console.log(req.url);
  next();
})
app.use(express.static('public'));
app.use(cors());
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(basePath, todoListRoutes);

// Execute App
app.listen(port, () => {
  console.log('TodoList Backend running on Port: ',port);
});
