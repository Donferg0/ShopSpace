module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category: DataTypes.TEXT,
    image: DataTypes.TEXT
<<<<<<< HEAD
=======
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
>>>>>>> 241c45d5036ea6bd8943a175d10a9cdc885e7a36
  });

  return items;
};
