'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentReportScores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      studentData_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
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
        allowNull:false,
      },
      science5: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      indonesian1: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      indonesian2: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      indonesian3: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      indonesian4: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      indonesian5: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      english1: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      english2: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      english3: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      english4: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      english5: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('studentReportScores');
  }
};