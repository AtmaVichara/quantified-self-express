var express = require('express');
var router = express.Router();
var Meal = require('../models/meal')
pry = require('pryjs')



router.get('/', (req, res) => {
  Meal.all()
    .then((meals) => res.json(meals))
    .catch((error) => res.sendStatus(500).json({error}))
})

router.get('/:meal_id/foods', (req, res) => {
  id = req.params.meal_id

  Meal.find(id)
    .then((meal) => {
      if(!meal) {
        res.sendStatus(404)
      } else {
        res.json(meal)
      }
    })
    .catch((error) => res.sendStatus(500).json( {error} ))
})

module.exports = router;
