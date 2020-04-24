const TodoListModel = require('../models/TodoListModel')
const mongoose = require('mongoose')
require('dotenv').config()

class TodoListController {
  static init () {
    mongoose.connect(`mongodb://${process.env.JS_BOX_MONGO_USERNAME}:${process.env.JS_BOX_MONGO_PASSWORD}@mongodb/js-box?authSource=admin`, { useNewUrlParser: true })
      .then(() => {
        console.log('MogoDB connected')
      })
      .catch(err => {
        console.log('Error connecting to MongoDB:', err.stack)
        process.exit(1)
      })
  }

  static all (req, res) {
    console.log('all')
    TodoListModel.find((err, items) => {
      if (err) {
        console.log(err)
        res.status(400).json(err)
      } else {
        res.json(items)
      }
    })
  }

  static add (req, res) {
    console.log('add')
    const item = new TodoListModel(req.body)
    item.save()
      .then(() => {
        res.json('Added')
      })
      .catch(err => {
        console.log(err)
        res.status(400).send('unable to save to database')
      })
  }

  static get (req, res) {
    console.log('get', req.params.id)
    const id = req.params.id
    TodoListModel.findById(id, (err, item) => {
      if (err) {
        console.log(err)
        res.status(400).json(err)
      } else {
        res.json(item)
      }
    })
  }

  static update (req, res) {
    console.log('update', req.params.id)
    TodoListModel.findById(req.params.id, (err, item) => {
      if (err || !item) {
        console.log(err)
        res.status(400).json(err)
      } else {
        item.desc = req.body.desc

        item.save()
          .then(() => {
            res.json('Updated')
          })
          .catch(err => {
            console.log(err)
            res.status(400).send('unable to update the database')
          })
      }
    })
  }

  static delete (req, res) {
    console.log('delete', req.params.id)
    const id = req.params.id
    TodoListModel.findByIdAndRemove(id, (err) => {
      if (err) {
        console.log(err)
        res.status(400).json(err)
      } else {
        res.json('Deleted')
      }
    })
  }
}

module.exports = TodoListController
