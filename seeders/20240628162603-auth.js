'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users =[
      {
        full_name: "admin1",
        age: "22 tahun",
        user_role:'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: "endUser",
        age: "22 tahun",
        user_role:'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    const insertUser = await queryInterface.bulkInsert("users", users, {
      returning : true,
    });

    const password = 'password';
    const confirm_password = password;

    const saltRounds = 10;
		const hashedPassword = bcrypt.hashSync(password, saltRounds);
		const hashedConfirmPassword = bcrypt.hashSync(confirm_password, saltRounds);

    const userDataAuth = insertUser.map((users)=>{
      return {
        user_id: users.id,
        email: `${users.user_role}@gmail.com`,
        password: hashedPassword,
        confirm_password: hashedConfirmPassword,
        createdAt: new Date(),
				updatedAt: new Date(),
      }
    });
    const userAuth = await queryInterface.bulkInsert('auths', userDataAuth, {
      returning: true,
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {returning: true});
    await queryInterface.bulkDelete('auths', null, {returning:true});
  }
};
