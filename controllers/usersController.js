const express = require('express');
const { getAllUsers, getUserById } = require('../queries/usersQueries');

const usersController = express.Router();

// Routes
usersController.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
});

usersController.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: `User with id ${id} not found`});
  }
})

module.exports = usersController;