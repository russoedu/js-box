import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema

class TodoList {
  initSchema () {
    const schema = new Schema(
      {
        desc: {
          type: String,
          required: true,
        }
      },
      {
        timestamps: true,
        collection: 'Tasks'
      }
    )

    schema.plugin(uniqueValidator)
    mongoose.model('TodoList', schema)
  }

  getInstance () {
    this.initSchema()
    return mongoose.model('TodoList')
  }
}

export default TodoList
