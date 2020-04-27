import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema

class TodoList {
  /**
   * Get the DB model intance
   */
  static getInstance () {
    const schema = new Schema(
      {
        desc: {
          type: String,
          required: true
        }
      },
      {
        timestamps: true,
        collection: 'Tasks'
      }
    )

    schema.plugin(uniqueValidator)
    return mongoose.model('TodoList', schema)
  }
}

export default TodoList.getInstance()
