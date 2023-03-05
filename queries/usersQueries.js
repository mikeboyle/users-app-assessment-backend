// const usersData = require('../usersData.json');
const db = require('../db/index');

// const idToUserIndex = usersData.reduce((index, user) => {
//   const { id } = user;
//   index[id] = user;
//   return index;
// }, {});

const getAllUsers = async() => {
  const usersData = await db.any('SELECT * FROM usersData');
  return usersData
}
// usersData;

const getUserById = async(id) => {
  const user = await db.oneOrNone('SELECT * FROM usersData WHERE id = $1', [id])
  return user;
}

module.exports = {
  getAllUsers,
  getUserById,
}