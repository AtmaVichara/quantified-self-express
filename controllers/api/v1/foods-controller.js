var express = require('express');
var router = express.Router();
var Food = require('../../../models/food')


class foodsController {

  static index(req, res) {
    Food.all()
      .then((foods) => {
        res.json(foods)
      })
      .catch((error) => res.sendStatus(500).json({error}))
  }

  static show(req, res) {
    let id = req.params.id

    Food.find(id)
      .then((food) => {
        if(food.length === 0) {
          res.sendStatus(404)
        } else {
          res.json(food)
        }
      })
      .catch((error) => res.sendStatus(500).json({error}))
  }

  static create(req, res) {
    let attributes = req.body.foods
    Food.create(attributes)
      .then((food) => { res.json(food) })
      .catch((error) => res.sendStatus(500).json( {error }))
  }

  static update(req, res) {
    let id = req.params.id
    let attributes = req.body.foods
    Food.update(id, attributes)
      .then((food) => {
        if(food.length === 0) {
          res.sendStatus(404)
        } else {
          res.json(food)
        }
      })
      .catch((error) => res.sendStatus(500).json( {error} ))
  }

  static destroy(req, res) {
    let id = req.params.id
    Food.find(id)
      .then((food) => {
        if(food.length === 0){
          res.sendStatus(404)
        } else {
          Food.destroy(id)
            .then((response) => res.sendStatus(202))
        }
      })
      .catch((error) => console.log({error}))
  }


}

module.exports = foodsController
