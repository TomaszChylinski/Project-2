module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    userId: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    userName: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    dailyCalorieGoal: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    goalWeight: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    currentWeight: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    age: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    gender: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    inspiration: {
      type: Sequelize.STRING,
      notEmpty: false
    }
  });

  return User;
};
