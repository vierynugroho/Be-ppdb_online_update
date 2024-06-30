'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentImage.belongsTo(models.studentData,{
        foreignKey: {
          name: "studentData_id"
        }
      })
    }
  }
  StudentImage.init({
    studentData_id: DataTypes.STRING,
    student_picture: DataTypes.STRING,
    ijazah_picture: DataTypes.STRING,
    family_card: DataTypes.STRING,
    graduation_certificate: DataTypes.STRING,
    graduation_certificate_highSchool: DataTypes.STRING,
    report_scores: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentImage',
  });
  return StudentImage;
};