const mongoose = require('mongoose')
const Schema = mongoose.Schema

//schema
const TodoList = new Schema(
  {
    desc: {
      type: String
    }
  },
  {
    collection: 'Tasks'
  }
)

module.exports = mongoose.model('TodoList', TodoList)
