module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
<<<<<<< HEAD
    category: DataTypes.TEXT,
    // image: DataTypes.TEXT
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
=======
    category: DataTypes.TEXT
    // image: DataTypes.TEXT,
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
  });

  return items;
};
