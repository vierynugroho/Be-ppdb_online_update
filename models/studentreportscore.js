"use strict";
const {Model,Sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentReportScores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studentReportScores.init(
    {
      user_id: DataTypes.INTEGER,
      mathematics1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mathematics2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mathematics3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mathematics4: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mathematics5: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      science1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      science2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      science3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      science4: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      science5: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      indonesian1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      indonesian2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      indonesian3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      indonesian4: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      indonesian5: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      english1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      english2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      english3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      english4: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      english5: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "studentReportScores",
    }
  );
  return studentReportScores;
};
