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
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: true,
			},
			ijazah_picture: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: true,
			},
			family_card: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: true,
			},
			graduation_certificate: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: true,
			},
			graduation_certificate_highSchool: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: true,
			},
			report_scores: {
				type: Sequelize.Sequelize.ARRAY(Sequelize.TEXT),
				allowNull: true,
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
