var express = require('express');
var app = express();
var router = express.Router();

//Schema
var TodoList = require('../models/TodoList');

// Get Specific
// Add item
router.route('/add').post(function (req, res) {
  console.log('/add');
  console.log(req);

  var item = new TodoList(req.body);
  console.log(item);

  item.save()
    .then(item => {
      res.json('Added');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route('/update/:id').put(function (req, res) {
  console.log('/update/:id');
  TodoList.findById(req.params.id, function (err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.desc = req.body.desc;

      item.save().then(item => {
        res.json('Updated');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Delete Specific
router.route('/delete/:id').put(function (req, res) {
  console.log('/delete/:id');
  TodoList.findByIdAndRemove({ _id: req.params.id },
    function (err, item) {
      if (err) res.json(err);
      else res.json('Deleted');
    });
});

router.route('/:id').post(function (req, res) {
  console.log('/:id');
  var id = req.params.id;
  TodoList.findById(id, function (err, item) {
    res.json(item);
  });
});

// Get All Items
router.route('/').post(function (req, res) {
  console.log('/');

  TodoList.find(function (err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

module.exports = router;
