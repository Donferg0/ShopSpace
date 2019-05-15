module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      email: DataTypes.STRING,
      password: DataTypes.TEXT

    });
    
      users.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        users.hasMany(models.items, {
          onDelete: "cascade"
        });
      };
    
    return users;
  };
