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
			studentData_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			student_picture: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false,
			},
			ijazah_picture: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false,
			},
			family_card: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false,
			},
			graduation_certificate: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false,
			},
			graduation_certificate_highSchool: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false,
			},
			report_scores: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('StudentImages');
	},
};
