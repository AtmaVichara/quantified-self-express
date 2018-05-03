const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class Meal {

  static all() {
    return database.raw(`
      SELECT meals.*, json_agg(foods.*)
      AS foods FROM meals
      INNER JOIN meal_foods ON meals.id = meal_foods.meal_id
      INNER JOIN foods ON meal_foods.food_id = foods.id
      GROUP BY meals.id
      ORDER BY id
    `)
    .then((meals) => meals.rows)
  }

  static find(id) {
    return database.raw(`
      SELECT meals.*, json_agg(foods.*)
      AS foods FROM meals
      INNER JOIN meal_foods ON meals.id = meal_foods.meal_id
      INNER JOIN foods ON meal_foods.food_id = foods.id
      WHERE meals.id = ?
      GROUP BY meals.id
    `, [id])
    .then((meal) => meal.rows[0])
    .catch((error) => console.log( {error} ))
  }

}

module.exports = Meal
