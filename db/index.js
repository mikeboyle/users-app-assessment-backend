// pgp object to connect to db
const pgp = require('pg-promise')();

// read values from dotenv file as environment variables
require ('dotenv').config();

// databaseURL is going to hold the connection string (DB_URL from elephantSQL)
const databaseURL = process.env.DB_URL;

// configuration obj
const cn = {
    connectionString: databaseURL,
    allowExitOnIdle: true,
    max: 30
};

// pass in connection/`cn` obj to `db` variable that we export
const db = pgp(cn);

// database obj to make sql queries to the database
module.exports = db;