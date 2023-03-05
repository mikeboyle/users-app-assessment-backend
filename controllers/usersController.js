const express = require("express");
const { getAllUsers, getUserById } = require("../queries/usersQueries");

const usersController = express.Router();

usersController.get("/", async (req, res) => {
  try {
    users = (await getAllUsers()) || [];
    if (users.length > 0) {
      res.status(200).json({ data: users });
      console.log("=== GET users: ", users, "===");
    } else {
      res.status(404).json({ error: `Users ${users} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    user = await getUserById(id);

    if (user.length > 0) {
      res.status(200).json({ data: user });
      console.log("=== GET user by id: ", user, "===");
    } else {
      res.status(404).json({ error: `User with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = usersController;
