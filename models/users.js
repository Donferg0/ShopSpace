module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
=======
        isAlpha: true,
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
        len: [5]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
=======
        isAlpha: true,
>>>>>>> d03fd1e8a83c38e4ff920b7354d82ec7bc0ffb7a
        len: [2]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        // IsLowercase: true,
        // isUppercase: true,
        // isAlphanumeric: true,
        len: [6, 10]
      }
    }
  });
  return User;
};
