'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const majorData = [];

    for (let i = 1; i <= 5; i++){
      majorData.push({
        major_name: ` Major ${i}`,
        major_description:'',
        major_picture:'default.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    return queryInterface.bulkInsert('Majors', majorData);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Majors', null, {});
  }
};