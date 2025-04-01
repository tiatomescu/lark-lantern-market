const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')["development"]);

//READ
router.get('/', (req, res) => {
  knex('users')
  .select('*')
  .then(data => {
    const userList = data.map(user => {return {...user}})
    return res.status(200).json(userList);
  })
})

//CREATE
router.post('/', (req, res) => {
  const {first_name, last_name, username, password} = req.body;
  knex('users')
  .insert({first_name, last_name, username, password})
  .then(() => {
    return res.status(201).json({message: `Welcome ${first_name}, your username is ${username}.`})
  })
  .catch(err => {
    return res.status(500).json({message: 'Error creating user.', error: err})
  })
})

module.exports = router;