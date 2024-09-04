'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Majors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      major_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      major_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      major_picture: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "default.png"
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
    await queryInterface.dropTable('Majors');
  }
};