const db = require("../db")

const getAllUsers = async() => {
  const users = await db.any('SELECT * FROM users');
  return users;
};

const getUserById = async(id) => {
  const users = await db.oneOrNone('SELECT * FROM users WHERE id=$1', [id]);
  return users;
}

module.exports = {
  getAllUsers,
  getUserById,
}