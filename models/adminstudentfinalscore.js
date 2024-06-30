'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminStudentFinalScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdminStudentFinalScore.hasOne(models.studentData,{
        foreignKey:{
          name: "adminStudentFinalScore_id"
        }
      });
    }
  }
  AdminStudentFinalScore.init({
    health_score: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    interview_score:{
      type: DataTypes.INTEGER,
      allowNull:false
  },
  }, {
    sequelize,
    modelName: 'AdminStudentFinalScore',
  });
  return AdminStudentFinalScore;
};