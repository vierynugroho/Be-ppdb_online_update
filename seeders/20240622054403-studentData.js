'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const studentData = [];

    for (let i = 1; i<=5; i++){
      studentData.push({
        user_id: i,
        student_name: `student ${i}`,
        student_gender: 'Laki-laki',
        place_birth: "Jakarta",
        date_birth: "12-12-2015",
        student_address: "Yogyakarta",
        student_distance: '3km',
        student_religion:"Islam",
        student_blood_type:"o",
        student_weight: 34,
        student_height: 156,
        student_child: 2,
        student_kps: "KIP",
        student_hobby:"football",

        father_name:"Uno",
        father_job: "Wiraswasta",
        place_birth_father: "Maras tengah",
        father_birth: "02-02-1997",
        mother_name:"Asiah",
        mother_job: "PNS",
        place_birth_mother: "Maras tengah",
        mother_birth: "02-02-1998",
        phoneNumber_house:"084364734522",


        guardian_name: "Hilpi",
        guardian_address: "Yogyakarta",
        guardian_phone:"08577436473",
        guardian_job: "PNS",

        school_name: "SMPN 13 SELUMA",
        school_address: "Jambat Akar",
        ijazah_number: "M-SMK/01-01/07878785",
        nisn: "nm5787435734"
      })

    }
    return queryInterface.bulkInsert('studentData', studentData);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('studentData', null,{});
  }
};
