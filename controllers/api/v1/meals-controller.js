var express = require('express');
var router = express.Router();
var Meal = require('../../../models/meal')


class mealsController {

  static index(req, res) {
    Meal.all()
      .then((meals) => res.json(meals))
      .catch((error) => res.status(500).json({error}))
  }

  static show(req, res) {
    let id = req.params.meal_id

    Meal.find(id)
      .then((meal) => {
        if(!meal) {
          res.sendStatus(404)
        } else {
          res.json(meal)
        }
      })
      .catch((error) => res.status(500).json( {error} ))
  }

}

module.exports = mealsController
