module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return users;
  };