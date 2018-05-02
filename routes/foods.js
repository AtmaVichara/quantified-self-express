var express = require('express');
var router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

router.get('/', (req, res) => {
  database.raw(`SELECT * FROM foods`)
    .then((foods) => {
      res.json(foods.rows)
    })
})

router.get('/:id', (req, res) => {
  id = req.params.id

  database.raw(`SELECT * FROM foods WHERE id=?`, [id])
    .then((food) => {
      if(food.rows.length === 0){
        res.sendStatus(404);
      } else {
        res.json(food.rows);
      }
    })
})

module.exports = router;
