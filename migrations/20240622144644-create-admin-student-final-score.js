"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AdminStudentFinalScores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      health_score: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      interview_score: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      average_final_score: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },

      final_result: {
        type: Sequelize.ENUM('Diterima','Tidak diterima', 'Dipertimbangkan'),
        allowNull: true,
      },
      major_result: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      result_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AdminStudentFinalScores");
  },
};
