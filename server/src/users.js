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

router.get('/:id', (req, res) => {
  knex('users')
  .select('id', 'first_name', 'last_name')
  .where('id', req.params.id)
  .then(data => {
    const itemList = data.map(item => {return {...item}});
    return res.status(200).json(itemList);
  })
  .catch(err => {
    return res.status(404).json({message: 'User not found.', error: err})
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