var express = require('express');
var app = express();
var router = express.Router();

//Schema
var TodoList = require('../models/TodoList');

// TODO add error log
router.route('/add').post((req, res) => {
  console.log('/add');
  var item = new TodoList(req.body);
  item.save()
    .then(() => {
      res.json('Added');
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

router.route('/update/:id').put((req, res) => {
  console.log('/update/:id');
  TodoList.findById(req.params.id, (err, item) => {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.desc = req.body.desc;

      item.save()
        .then(() => {
          res.json('Updated');
        })
        .catch(err => {
          console.log(err);
          res.status(400).send("unable to update the database");
        });
    }
  });
});

router.route('/delete/:id').put((req, res) => {
  console.log('/delete/:id');
  var id = req.params.id;
  TodoList.findByIdAndRemove(id, (err) => {
      if (err) {
      console.log(err);
      res.status(400).json(err);
      }
      else {
        res.json('Deleted');
      }
    });
});

router.route('/:id').post((req, res) => {
  console.log('/:id');
  var id = req.params.id;
  TodoList.findById(id, (err, item) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    }
    else {
      res.json(item);
    }
  });
});

router.route('/').post((req, res) => {
  console.log('/');

  TodoList.find((err, items) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.json(items);
    }
  });
});

module.exports = router;
