module.exports = function(sequelize, DataTypes) {
  var CalTotal = sequelize.define("CalTotal", {
    text: DataTypes.STRING,
    description: DataTypes.INTEGER,
  })
  return CalTotal;
};
