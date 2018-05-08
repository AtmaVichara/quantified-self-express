var express = require('express');
var router = express.Router();
var foodsController = require('../../../controllers/api/v1/foods-controller')
var Food = require('../../../models/food')

router.get('/', (req, res) => {
  foodsController.index(req, res)
})

router.get('/:id', (req, res) => {
  foodsController.show(req, res)
})

router.post('/', (req, res) => {
  foodsController.create(req, res)
})

router.patch('/:id', (req, res) => {
  foodsController.update(req, res)
})

router.delete('/:id', (req, res) => {
  foodsController.destroy(req, res)
})


module.exports = router;
