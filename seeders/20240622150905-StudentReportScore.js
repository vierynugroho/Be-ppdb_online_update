'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const studentReportScore = [];
    for (let i = 1; i <=5; i++){
      studentReportScore.push({

        studentData_id:i,
        mathematics1:20,
        mathematics2:80,
        mathematics3:83,
        mathematics4:90,
        mathematics5:85,

        science1:90,
        science2:85,
        science3:79,
        science4:89,
        science5:90,

        indonesian1:90,
        indonesian2:75,
        indonesian3:87,
        indonesian4:98,
        indonesian5:90,

        english1:98,
        english2:87,
        english3:76,
        english4:90,
        english5:78,

        final_report_score:90,

        createdAt: new Date(),
        updatedAt: new Date(),
      })

    }
    return queryInterface.bulkInsert('studentReportScores', studentReportScore);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('studentReportScores', null, {});
  }
};
