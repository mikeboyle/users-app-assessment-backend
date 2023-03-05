// import database
const db = require('../db');

// Queries
const getAllUsers = async () => {
  const allUsers = await db.any('SELECT * FROM users');
  return allUsers;
};

const getUserById = async (id) => {
  const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
  return user;
}

module.exports = {
  getAllUsers,
  getUserById,
}