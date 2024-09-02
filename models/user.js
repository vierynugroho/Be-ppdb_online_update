'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Auth,{
        foreignKey:{
          name: "user_id",
        }
      });
      User.hasOne(models.studentData,{
        foreignKey:{
          name:"user_id",
        }
      })
      User.hasOne(models.AdminStudentFinalScore,{
        foreignKey:{
          name:"user_id",
        }
      })
    }
  }
  User.init({
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_role: {
        type: DataTypes.ENUM('admin','student')
      },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};