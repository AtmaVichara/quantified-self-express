const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Meal {

  static all() {
    return database('meals')
      .select("meals.*", database.raw('json_agg(foods.*) as foods'))
      .leftJoin('meal_foods', 'meals.id', 'meal_foods.meal_id')
      .leftJoin('foods', 'meal_foods.meal_id', 'foods.id')
      .groupBy('meals.id')
      .then((meals) => meals)
  }

  static find(id) {
    return database('meals')
      .select("meals.*", database.raw('json_agg(foods.*) as foods'))
      .leftJoin('meal_foods', 'meals.id', 'meal_foods.meal_id')
      .leftJoin('foods', 'meal_foods.meal_id', 'foods.id')
      .where("meals.id", id)
      .groupBy('meals.id')
      .then((meal) => meal[0])
      .catch((error) => console.log( {error} ))
  }

}

module.exports = Meal
