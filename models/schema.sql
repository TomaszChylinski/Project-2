DROP DATABASE IF EXISTS healthfit;

--Create Database 
CREATE DATABASE healthfit;
USE healthfit;


CREATE TABLE user_data
(
    userId int NOT NULL AUTO_INCREMENT,
    userName varchar(50) NOT NULL,
	dailyCalorieGoal int NOT NULL,
    goalWeight int NOT NULL,
    currentWeight int NOT NULL,
	age int NOT NULL,
    gender varchar(20) NOT NULL,
    PRIMARY KEY (userId)
);


