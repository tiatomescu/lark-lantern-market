const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')["development"]);
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

//login
router.post('/login', (req, res) => {
  const {username, password} = req.body;

  knex('users')
  .select('*')
  .where('username', username)
  .then(user => {
    if (user.length == 0) {
      return res.status(404).json({message: 'User not found.'})
    } else {
      return bcrypt.compare(password, user[0].password)
      .then((matches) => {
        return matches == true
                ? res.status(200).json({ message: 'Login successful', userId: user[0].id })
                : res.status(401).json({message: 'Password is incorrect.'})
      })
    }})
  .catch((err) => {
    return res.status(500).json({message: 'Unable to get login information.', error: err})
  })
})

//READ
router.get('/', (req, res) => {
  knex('users')
  .select('*')
  .then(data => {
    const userList = data.map(user => {return {...user}})
    return res.status(200).json(userList);
  })
  .catch((err) => {
    return res.status(500).json({message: 'Unable to get users.', error: err})
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
router.post('/', async (req, res) => {
  const {first_name, last_name, username, password} = req.body;
  const hashedPassword = await hashPassword(password);
  knex('users')
  .insert({first_name, last_name, username, password: hashedPassword})
  .then(() => {
    return res.status(201).json({message: `Welcome ${first_name}, your username is ${username}.`})
  })
  .catch(err => {
    return res.status(500).json({message: 'Error creating user.', error: err})
  })
})

module.exports = router;