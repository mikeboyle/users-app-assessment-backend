const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (err) {
    return err;
  }
};

const getUserById = async (id) => {
  try {
    const user = await db.any("SELECT * FROM users WHERE id = $1", id);
    return user;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
