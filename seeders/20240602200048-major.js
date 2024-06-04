'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const majorData = [];

    for (let i = 1; i <= 5; i++){
      majorData.push({
        name: ` Major ${i}`,
        description:'',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    return queryInterface.bulkInsert('major', majorData);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('major', null, {});
  }
};