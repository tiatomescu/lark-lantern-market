/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
  await knex('users').insert([
    {first_name: 'Otto', last_name: 'Whistle', username: 'ottofinn', password: '$2b$10$oiZoEgycyJGBW8pBToGBoORCyXNvaqAMxT/zeQhIiPOewCYoMWJFS'},
    {first_name: 'Elior', last_name: 'Starcrest', username: 'celestialbaker', password: '$2b$10$hmiWJYm8gX14phGl7a4hHOpigVwMSq9GtbignD.hpkBUu5ntufqUW'},
    {first_name: 'Liora', last_name: 'Skywhisper', username: 'sbflowers', password: '$2b$10$245h1zZILpnpDqoIICSay.uFVX2MdBuf..GPu1cttmb1Muel6/2pu'}
  ]);
};

/* Test Username/Passwords proir to hashing */
//ottofinn GigglePumpkin123!
//celestialbaker DreamCroissant77@
//sbflowers LullabyPetal42!