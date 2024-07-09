'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const finalScoreData = [];
    for (let i = 1; i <= 5; i++) {
      finalScoreData.push ({
        health_score: 80,
        interview_score:80,
        createdAt: new Date(),
				updatedAt: new Date(),
      })
    }
    return queryInterface.bulkInsert('AdminStudentFinalScores', finalScoreData)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AdminStudentFinalScores', null, {});
  }
};
