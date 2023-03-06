DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    age INTEGER DEFAULT 0,
    name VARCHAR(255),
    company VARCHAR(255),
    country VARCHAR(255),
    photo TEXT,
    about TEXT,
    latitude DECIMAL,
    longitude INTEGER
);