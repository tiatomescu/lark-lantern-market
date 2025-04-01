/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
  await knex('users').insert([
    {first_name: 'Otto', last_name: 'Whistle', username: 'ottofinn', password: 'GigglePumpkin123!'},
    {first_name: 'Elior', last_name: 'Starcrest', username: 'celestialbaker', password: 'DreamCroissant77@'},
    {first_name: 'Liora', last_name: 'Skywhisper', username: 'sbflowers', password: 'LullabyPetal42!'}
  ]);
};
