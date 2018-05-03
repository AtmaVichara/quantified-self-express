var express = require('express');
var router = express.Router();
var Meal = require('../models/meal')

router.get('/', (req, res) => {
  Meal.all()
    .then((meals) => res.json(meals))
    .catch((error) => res.sendStatus(500).json({error}))
})

module.exports = router;
