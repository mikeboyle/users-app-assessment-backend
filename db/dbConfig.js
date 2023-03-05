const pgp = require("pg-promise")();

require("dotenv").config();

const { DB_URL, PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD, PG_PORT } =
  process.env;

const cn = DB_URL
  ? {
      connectionString: DB_URL,
      allowExitOnIdle: true,
      max: 30,
    }
  : {
      host: PG_HOST,
      database: PG_DATABASE,
      user: PG_USER,
      password: PG_PASSWORD,
      port: PG_PORT,
    };

const db = pgp(cn);

module.exports = db;
