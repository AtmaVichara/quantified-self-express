const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class MealFood {

  static find(attributes) {
    return database('meal_foods').where(attributes).returning('*')
      .then((meal_food) => {
        return this.names(attributes)
      })
      .catch((error) => console.log({error}))
  }

  static create(attributes) {
    return database('meal_foods').insert(attributes).returning('*')
      .then((meal_food) => {
        return this.names(attributes)
      })
  }

  static destroy(attributes) {
    return database('meal_foods').where(attributes).del()
  }

  static names(attributes) {
    return database('meal_foods')
      .select('meals.name AS meal_name', 'foods.name AS food_name')
      .where(attributes)
      .join('meals', 'meal_foods.meal_id', 'meals.id')
      .join('foods', 'meal_foods.food_id', 'foods.id')
      .then((names) => {
        return names
      })
      .catch((error) => console.log({error}))
  }
}

module.exports = MealFood
