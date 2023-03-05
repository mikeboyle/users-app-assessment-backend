const express = require("express");
const { getAllUsers, getUserById } = require("../queries/usersQueries");

const usersController = express.Router();

usersController.get("/", async (req, res) => {
  users = (await getAllUsers()) || [];
  res.status(200).json({ data: users });
});

usersController.get("/:id", async (req, res) => {
  const { id } = req.params;
  user = await getUserById(id);
  if (user) {
    res.status(200).json({ data: user });
  } else {
    res.status(404).json({ error: `User with id ${id} not found` });
  }
});

module.exports = usersController;
