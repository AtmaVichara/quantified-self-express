
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foods', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.integer('calories');
    table.timestamp('created_at');
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('foods')
};
