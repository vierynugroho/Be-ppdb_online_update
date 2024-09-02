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
      AdminStudentFinalScore.belongsTo(models.User,{
        foreignKey: {
          name: 'user_id',
        },
      });
    }
  }
  AdminStudentFinalScore.init({
    user_id: {
      type:DataTypes.INTEGER
    },
    health_score: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    interview_score:{
      type: DataTypes.FLOAT,
      allowNull:true
  },
  average_final_score: {
        type: DataTypes.FLOAT,
        allowNull:true
      },
  final_result: {
        type: DataTypes.ENUM('Diterima','Tidak diterima'),
        allowNull:true
      },
  major_result: {
        type: DataTypes.STRING,
        allowNull:true
      },
  result_description: {
        type: DataTypes.STRING,
        allowNull:true
      },
  }, {
    sequelize,
    modelName: 'AdminStudentFinalScore',
  });
  return AdminStudentFinalScore;
};