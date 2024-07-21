'use strict';
const {Model,Sequelize, STRING} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      studentData.belongsTo(models.User,{
        foreignKey: "user_id"
      });
    }
  }
  studentData.init({
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place_birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_birth:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      student_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_distance:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_religion: {
        type:DataTypes.ENUM(["Islam", "Kristen", "Budha", "Hindu"]),
        defaultValue: "Islam",
        allowNull: false,
      },
      student_blood_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      student_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      student_child: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      student_kps: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_hobby: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      father_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      father_job: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place_birth_father: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      father_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mother_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mother_job: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place_birth_mother: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mother_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      guardian_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber_house:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      guardian_name: {
        type: DataTypes.STRING
      },
      guardian_address: {
        type: DataTypes.STRING
      },
      guardian_phone: {
        type: DataTypes.STRING
      },
      guardian_job: {
        type: DataTypes.STRING
      },

      school_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      school_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ijazah_number: {
        type:  DataTypes.STRING,
        allowNull: false,
      },
      nisn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      document_id: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      }
  }, {
    sequelize,
    modelName: 'studentData',
  });
  return studentData;
};