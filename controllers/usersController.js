const express = require('express');
const { getAllUsers, getUserById } = require('../queries/usersQueries');

const usersController = express.Router();

usersController.get('/', async (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
  users = await getAllUsers();
=======
  users = await getAllUsers() || [];
>>>>>>> 5fc63e6 (adds db config, schema, seed files and updates routes and controllers)
=======
  users = await getAllUsers();
>>>>>>> 813cf64 (update)
  res.status(200).json({ data: users });
});

usersController.get('/:id', async (req, res) => {
  const { id } = req.params;
  user =  await getUserById(id);
  if (user) {
    res.status(200).json({ data: user });
  } else {
    res.status(404).json({ error: `User with id ${id} not found`});
  }
})

module.exports = usersController;