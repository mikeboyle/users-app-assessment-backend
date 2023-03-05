// const usersData = require("../usersData.json");
const db = require("../db/index");

// const idToUserIndex = usersData.reduce((index, user) => {
//   const { id } = user;
//   index[id] = user;
//   return index;
// }, {});

async function getAllUsers() {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(id) {
  try {
    const user = await db.one("SELECT * FROM users WHERE id=$1", id);
    return user;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
};
