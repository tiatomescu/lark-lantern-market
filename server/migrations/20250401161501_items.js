/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.integer('user_id');
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.string('item_name');
    table.string('description');
    table.integer('quantity');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('items', table => {
    table.dropForeign('user_id');
  }).then(() => {
    return knex.schema.dropTableIfExists('items');
  })
};
