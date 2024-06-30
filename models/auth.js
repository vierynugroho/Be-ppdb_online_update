"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class auths extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      auths.belongsTo(models.users,{
        foreignKey:"user_id",
      })
    }
  }
  auths.init(
    {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Please enter email",
        },
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirm_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "auths",
    }
  );
  return auths;
};
