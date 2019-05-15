module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category: DataTypes.TEXT
  });

  items.associate = function(models) {
    // We're saying that a item should belong to a user
    // an item can't be created without a user due to the foreign key constraint
    items.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
    items.findAll({ include: [{ users: true }] })

  };

  return items;
};
