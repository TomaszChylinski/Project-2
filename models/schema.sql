/*
DROP DATABASE IF EXISTS healthfit;
CREATE DATABASE healthfit;

DROP DATABASE IF EXISTS healthfit;
CREATE DATABASE healthfit;
*/

-- example for class activity delete after
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_db
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)

)
