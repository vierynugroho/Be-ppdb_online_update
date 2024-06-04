'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student_score.belongsTo(models.user,{
        foreignKey:{
          name: "user_id"
        }
      })
    }
  }
  student_score.init({
    user_id: DataTypes.INTEGER,
    ijazah_id: DataTypes.INTEGER,
    health_id: DataTypes.INTEGER,
    matematic: DataTypes.FLOAT,
    science: DataTypes.FLOAT,
    bahasa_indonesia: DataTypes.FLOAT,
    english: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'student_score',
  });
  return student_score;
};