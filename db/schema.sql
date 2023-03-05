DROP TABLE IF EXISTS usersData;

CREATE TABLE usersData(
   id        INTEGER  NOT NULL PRIMARY KEY 
  ,age       INTEGER 
  ,name      VARCHAR(15)
  ,company   VARCHAR(9)
  ,country   VARCHAR(11)
  ,photo     text
  ,about     VARCHAR(483)
  ,latitude  NUMERIC(10,6)
  ,longitude NUMERIC(11,6)
);

CREATE INDEX user_id ON usersData(id);