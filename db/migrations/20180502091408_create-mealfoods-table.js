
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE meal_foods(
    meal_id INTEGER REFERENCES meals,
    food_id INTEGER REFERENCES foods
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE meal_foods`
  return knex.raw(dropQuery)
};
