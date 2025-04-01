const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js')["development"]);

//CREATE
router.post('/', (req, res) => {
  const {user_id, item_name, description, quantity} = req.body;
  if (quantity <= 0) {
    return res.status(400).json({message: 'Item quantity must be more than 0'})
  }
  knex('items')
  .insert({user_id, item_name, description, quantity})
  .then(() => {
    if (quantity > 1) {
      return res.status(201).json({message: `${quantity} ${item_name}s added!`})
    } else {
      return res.status(201).json({message: `1 ${item_name} added!`})
    }
  })
})

//READ
router.get('/', (req, res) => {
  knex('items')
  .leftJoin('users', 'items.user_id', 'users.id')
  .select('items.*', 'users.first_name')
  .then(data => {
    const itemList = data.map(item => {return {...item}});
    return res.status(200).json(itemList);
  })
})

router.get('/user/:id', (req, res) => {
  knex('items')
  .select('*')
  .where('user_id', req.params.id)
  .then(data => {
    const itemList = data.map(item => {return {...item}});
    return res.status(200).json(itemList);
  })
})

//UPDATE
router.patch('/:id', (req, res) => {
  knex('items')
  .where('id', req.params.id)
  .update(req.body)
  .then(() => {
    res.status(200).json({message: 'Item updated successfully'})
  })
  .catch((err) => {
    res.status(500).json({message: 'Error updating item', error: err})
  })
})


//DELETE
router.delete('/:id', (req, res) => {
  knex('items')
  .where('id', req.params.id)
  .del()
  .then(rowsDeleted => {
    rowsDeleted == 1 ? res.status(200).json({message: `Item with id: ${req.params.id} successfully deleted.`})
                    : res.status(404).json({message: `Item with id: ${req.params.id} does not exist.`})
  })
})

module.exports = router;