'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users",[
      {
        name: "Qonita Afifah",
        age:21,
        role: "admin",
        createdAt: "2020-12-14T03:35:21 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        name: "Jacobs Cox",
        age: 16,
        role: "siswa",
        createdAt: "2023-11-13T09:30:44 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
