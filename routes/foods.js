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

module.exports = router;
