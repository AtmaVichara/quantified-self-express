var express = require('express');
var router = express.Router();
var mealsController = require('../../../controllers/api/v1/meals-controller')
var mealFoodsController = require('../../../controllers/api/v1/meal-foods-controller')


router.get('/', (req, res) => {
  mealsController.index(req, res)
})

router.get('/:meal_id/foods', (req, res) => {
  mealsController.show(req, res)
})

router.post('/:meal_id/foods/:food_id', (req, res) => {
  mealFoodsController.create(req, res)
})

router.delete('/:meal_id/foods/:food_id', (req, res) => {
  mealFoodsController.destroy(req, res)
})

module.exports = router;
