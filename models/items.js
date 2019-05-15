module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category: DataTypes.TEXT
  });

<<<<<<< HEAD
  // items.associate = function(models) {
  //   // We're saying that a item should belong to a user
  //   // an item can't be created without a user due to the foreign key constraint
  //   items.belongsTo(models.users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
=======
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
>>>>>>> 6250edb273ec0e862e3e1a914d6340b9cb334fb7

  return items;
};
