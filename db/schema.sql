CREATE DATABASE burger_DB; 
USE burger_DB; 
CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (200),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)   
);

