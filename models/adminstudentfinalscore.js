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
  average_final_score: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
  }, {
    sequelize,
    modelName: 'AdminStudentFinalScore',
  });
  return AdminStudentFinalScore;
};