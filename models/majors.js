'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Majors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Majors.init({
    major_name:  {
      type: DataTypes.STRING,
      allowNull:false,
    },
    major_description: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    major_picture: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
      defaultValue: "default.png",
    },
  }, {
    sequelize,
    modelName: 'Majors',
  });
  return Majors;
};