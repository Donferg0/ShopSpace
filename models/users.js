module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  });

<<<<<<< HEAD
  // users.associate = function (models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   users.hasMany(models.items, {
  //     onDelete: "cascade"
  //   });
  // };

  return users;
};
=======
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
>>>>>>> 6250edb273ec0e862e3e1a914d6340b9cb334fb7
