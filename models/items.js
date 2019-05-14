module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return items;
};

