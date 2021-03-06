"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      users.hasMany(models.bookList, {
        as: "bookList",
        foreignKey: {
          name: "userId",
        },
      });
      users.hasMany(models.transaction, {
        as: "clientTransaction",
        foreignKey: {
          name: "userId",
        },
      });
      users.hasMany(models.books, {
        as: "books",
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  users.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      address: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
