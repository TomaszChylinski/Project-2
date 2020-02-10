module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    userName: DataTypes.STRING,
    dailyCalorieGoal: DataTypes.INTEGER,
    goalWeight: DataTypes.INTEGER,
    currentWeight: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    inspired: DataTypes.STRING
  })
  return Example;
};
