module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      email: DataTypes.STRING,
      password: DataTypes.TEXT
    });
    return users;
  };