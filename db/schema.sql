DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  age INTEGER,
  name VARCHAR(255),
  company VARCHAR(255),
  country VARCHAR(255),
  photo text,
  about text,
  latitude float,
  longitude float
);
