const  db  = require('../db/dbConfig.')


const getAllUsers = async () => {
  const users = await db.any('SELECT * FROM users');
  return users;
};

const getUserById = async (id) => {
    const user = await db.one(`SELECT * from users WHERE users.id=$1`, id);
    return user;
};


module.exports = {
  getAllUsers,
  getUserById,
}