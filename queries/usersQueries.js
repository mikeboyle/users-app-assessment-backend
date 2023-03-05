//const usersData = require('../usersData.json');

<<<<<<< HEAD
const db  = require('../db/dbConfig.')
=======
const { db } = require('../db/dbConfig.')
>>>>>>> 5fc63e6 (adds db config, schema, seed files and updates routes and controllers)

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
<<<<<<< HEAD
<<<<<<< HEAD
    const user = await db.one(`SELECT * from users WHERE users.id=$1`, id);
=======
    const user = await db.one(`SELECT from users WHERE users.id=$1`, id);
>>>>>>> 5fc63e6 (adds db comfigs shema, seed files and updates routes and controllers)
=======
    const user = await db.one(`SELECT * from users WHERE users.id=$1`, id);
>>>>>>> 11dac8f (fix getUserById query)
    return user;
  } catch (err) {
    return err;
  }
};


module.exports = {
  getAllUsers,
  getUserById,
}