const db = require('../db');

const getAllUsers = async () =>{
  const users = await db.any('SELECT * FROM users');
  return users;
} 

const getUserById = async (id) => {
  const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
  return user;
}

module.exports = {
  getAllUsers,
  getUserById,
}