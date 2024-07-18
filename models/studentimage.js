'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class StudentImage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	StudentImage.init(
		{
			student_picture: DataTypes.ARRAY(DataTypes.TEXT),
			ijazah_picture: DataTypes.ARRAY(DataTypes.TEXT),
			family_card: DataTypes.ARRAY(DataTypes.TEXT),
			graduation_certificate: DataTypes.ARRAY(DataTypes.TEXT),
			graduation_certificate_highSchool: DataTypes.ARRAY(DataTypes.TEXT),
			report_scores: DataTypes.ARRAY(DataTypes.TEXT),
		},
		{
			sequelize,
			modelName: 'StudentImage',
		}
	);
	return StudentImage;
};
