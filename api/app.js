const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const TodoListController = require('./src/controller/TodoListController')
require('dotenv').config()

const port = 4000
const accessLogStream = fs.createWriteStream(path.join(__dirname, `../logs/api-${process.env.JS_BOX_ENVIRONMENT}-access.log`), { flags: 'a' })

TodoListController.init()

app.use(cors())
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json())

app.post('/add', TodoListController.add)
app.put('/update/:id', TodoListController.update)
app.put('/delete/:id', TodoListController.delete)
app.post('/:id', TodoListController.get)
app.post('/', TodoListController.getAll)

app.listen(port, () => {
  console.log('Backend running on Port: ', port)
})
