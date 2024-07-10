"use strict";
const {Model,Sequelize, STRING} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentReportScores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      studentReportScores.belongsTo(models.studentData,{
        foreignKey: {
          name:"studentData_id",
        }
      });
    }
  }
  studentReportScores.init(
    {
      user_id: DataTypes.INTEGER,
      studentData_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mathematics1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mathematics2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mathematics3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mathematics4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mathematics5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      science1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      science2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      science3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      science4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      science5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      indonesian1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      indonesian2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      indonesian3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      indonesian4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      indonesian5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      english1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      english2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      english3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      english4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      english5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      final_report_score:{
        type: DataTypes.DECIMAL,
        allowNull:true
      },
    },
    {
      sequelize,
      modelName: "studentReportScores",
    }
  );
  return studentReportScores;
};
