const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('TodoList', TodoList)
