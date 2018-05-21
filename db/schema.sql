CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	id INTEGER (6) auto_increment,
    burger_name VARCHAR (30),
    devoured boolean,
    PRIMARY KEY (id)
);