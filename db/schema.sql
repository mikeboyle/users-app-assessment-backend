DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL UNIQUE NOT NULL PRIMARY KEY,
  age INT,
  name TEXT,
  company TEXT,
  country TEXT,
  photo TEXT,
  about TEXT,
  latitude TEXT,
  longitude TEXT
);