DROP TABLE  IF EXISTS users;

    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    age TEXT,
    name TEXT,
    company TEXT NOT NULL UNIQUE,
    country TEXT,
    photo TEXT NOT NULL UNIQUE,
    about TEXT,
    latitude TEXT,
    longitude TEXT UNIQUE,
);