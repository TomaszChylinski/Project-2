DROP DATABASE IF EXISTS healthfit;
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


    INSERT INTO user_data (userId,userName,dailyCalorieGoal,goalWeight,currentWeight,age,gender)
   	 VALUES (
				1, "Dave Smith",2200, 200, 252,36,"Male"
			),
            (
				2, "Steven Gerrard",1950, 195, 220,39,"Male"
            ),
            (   
				3, "Keri Fowler",1820, 165, 179,29,"Female"
            )
