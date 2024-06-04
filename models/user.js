'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
      user.hasMany(models.biodata,{
        foreignKey: {
          name:"user_id"
        }
      });
      user.hasMany(models.healts,{
        foreignKey: {
          name: "user_id"
        }
      });
      user.hasMany(models.student_score,{
        foreignKey: {
          name: "user_id"
        }
      });
      user.hasMany(models.ijazah,{
        foreignKey: {
          name: "user_id"
        }
      });

    }
  }
  user.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};