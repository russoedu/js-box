const TodoListModel = require('../models/TodoListModel')
const mongoose = require('mongoose')

class TodoListController {
  static init () {
    mongoose.connect('mongodb://mongodb')
      .then(() => {
        console.log('MogoDB connected')
      })
      .catch(err => {
        console.log('Error connecting to MongoDB:', err.stack)
        process.exit(1)
      })
  }

  static add (req, res) {
    console.log('/add')
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

  static update (req, res) {
    console.log('/update/:id', req.params.id)
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
    console.log('/delete/:id', req.params.id)
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

  static get (req, res) {
    console.log('/:id', req.params.id)
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

  static getAll (req, res) {
    console.log('/')
    TodoListModel.find((err, items) => {
      if (err) {
        console.log(err)
        res.status(400).json(err)
      } else {
        res.json(items)
      }
    })
  }
}

module.exports = TodoListController
