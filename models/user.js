'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /**
         * setiap objek User hanya memiliki satu objek Auth yang terkait dengannya.
     */
      users.hasOne(models.auths, {
        foreignKey: {
          name: "user_id"
        }
      });
      users.hasOne(models.studentData, {
        foreignKey: {
          name: "user_id"
        }
      })
    }
  }
  users.init(
    {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_role:{
      type:DataTypes.ENUM('admin','member')
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};