module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category: DataTypes.TEXT,
    // image: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE,
      default: Date.now()
    },
    updatedAt: {
      type: DataTypes.DATE,
      default: Date.now()
    }
  });

  return items;
};
