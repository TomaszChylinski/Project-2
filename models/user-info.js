module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    userName: DataTypes.STRING,
    dailyCalorieGoal: DataTypes.INTEGER,
    goalWeight: DataTypes.INTEGER,
    currentWeight: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    inspired: DataTypes.STRING
  });
  
  return User;
};