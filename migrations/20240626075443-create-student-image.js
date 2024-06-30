'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_picture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ijazah_picture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      family_card: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      graduation_certificate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      graduation_certificate_highSchool: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      report_scores: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('StudentImages');
  }
};