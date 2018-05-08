var express = require('express');
var router = express.Router();
var MealFood = require('../../../models/meal-food')
var Meal = require('../../../models/meal')
var Food = require('../../../models/food')

class mealFoodsController {

  static create(req, res) {
    let attributes = req.params
    Meal.find(req.params.meal_id)
      .then((meal) => {
        if(!meal) {
          res.sendStatus(404)
        } else {
          MealFood.create(attributes)
            .then((meal_food) => {
              res.status(201).json({
                message: `Successfully added ${meal_food[0].food_name} to ${meal_food[0].meal_name}`
              })
            })
            .catch((error) => console.log({error}))
        }
      })
  }

  static destroy(req, res) {
    let attributes = req.params
    MealFood.find(attributes)
      .then((meal) => {
        if(meal.length === 0) {
          res.sendStatus(404)
        } else {
          let names = meal[0]
          MealFood.destroy(attributes)
            .then((meal) => {
              res.status(200).json({
                message: `Successfully removed ${names.food_name} from ${names.meal_name}`
              })
          })
        }
      })
  }
}

module.exports = mealFoodsController
