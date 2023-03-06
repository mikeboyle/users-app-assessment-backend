/*
This script generates two seed files based on JSON data:
- seed_users.sql (insert user data into users table)
- seed_grades.sql (insert grades data into grades table)
To run the script: `node seedsFromJSON.js`
When preparing the data, you should do these operations in order:
1. Run schema.sql to create (or recreate) the users and grades tables.
2. Run seed_users.sql to seed user data
3. After 2) has completed, separately run seed_grades.sql to seed grades data.
*/
const fs = require('fs');
const { users } = require('./usersData.json');

const USERS_PROPERTY_NAMES_TO_COLUMN_NAMES = {
    id: 'id',
    age: 'age',
    name: 'name',
    company: 'company',
    country: 'country',
    photo: 'photo',
    about: 'about',
    latitude: 'latitude',
    longitude: 'longitude',
};


const USERS_FIELDS = [
     'id',
     'age',
     'name',
     'company',
     'country',
     'photo',
     'about',
     'latitude',
     'longitude',
];

const USERS_COLUMNS = USERS_FIELDS.map(
  (field) => USERS_PROPERTY_NAMES_TO_COLUMN_NAMES[field]
);


const userToValues = (user) => {
  const values = USERS_FIELDS.map((field) => `'${user[field]}'`);
  return `(${values.join(', ')})`;
};



const usersToValuesList = (users) => {
  const values = users.map((user) => userToValues(user));
  return values.join(', \n\t');
};



const seedUsersQuery = (users) => {
  return `INSERT INTO users (${USERS_COLUMNS.join(', ')})
    VALUES
    ${usersToValuesList(users)};`;
};



const seedUsers = seedUsersQuery(users);

fs.writeFileSync('./seed_users.sql', seedUsers);
