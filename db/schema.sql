DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    age INT,
    name varchar(255),
    company varchar(255),
    country varchar(255),
    photo varchar(255),
    about text,
    latitude float,
    longitude float
);

