const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


class Food {
  static all() {
    return database('foods').select('*')
  }

  static find(id) {
    return database('foods').where('id', id)
  }

  static create(attributes) {
    return database('foods').insert(attributes).returning('*')
  }

  static update(id, attributes) {
    return database('foods').where('id', id).update(attributes).returning('*')
  }

  static destroy(id) {
    return database('foods').where('id', id).del()
  }

}

module.exports = Food
