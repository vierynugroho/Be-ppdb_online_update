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
      allowNull:false,
    },
    interview_score:{
      type: DataTypes.FLOAT,
      allowNull:false
  },
  average_final_score: {
        type: DataTypes.FLOAT,
        allowNull:true
      },
  }, {
    sequelize,
    modelName: 'AdminStudentFinalScore',
  });
  return AdminStudentFinalScore;
};