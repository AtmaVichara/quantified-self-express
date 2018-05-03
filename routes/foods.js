var express = require('express');
var router = express.Router();
var Food = require('../models/food')

router.get('/', (req, res) => {
  Food.all()
    .then((foods) => {
      res.json(foods)
    })
    .catch((error) => res.sendStatus(500).json({error}))
})

router.get('/:id', (req, res) => {
  id = req.params.id

  Food.find(id)
    .then((food) => {
      if(food.length === 0) {
        res.sendStatus(404)
      } else {
        res.json(food)
      }
    })
})

router.post('/', (req, res) => {
  attributes = req.body.foods
  Food.create(attributes)
    .then((food) => { res.json(food) })
    .catch((error) => res.sendStatus(500).json( {error }))
})



module.exports = router;
