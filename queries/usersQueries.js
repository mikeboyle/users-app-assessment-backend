//const usersData = require('../usersData.json');

const { db } = require('../db/dbConfig.')

// const idToUserIndex = usersData.reduce((index, user) => {
//   const { id } = user;
//   index[id] = user;
//   return index;
// }, {});


const getAllUsers = async () => {
  try {
    const allUsers = await db.any(`SELECT * from users`);
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUserById = async (id) => {
  try {
    const user = await db.one(`SELECT from users WHERE users.id=$1`, id);
    return user;
  } catch (err) {
    return err;
  }
};


module.exports = {
  getAllUsers,
  getUserById,
}