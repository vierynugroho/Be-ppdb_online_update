'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      ijazah_id: {
        type: Sequelize.INTEGER
      },
      health_id: {
        type: Sequelize.INTEGER
      },
      mathematic: {
        type: Sequelize.FLOAT
      },
      science: {
        type: Sequelize.FLOAT
      },
      bahasa_indonesia: {
        type: Sequelize.FLOAT
      },
      english: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('student_scores');
  }
};