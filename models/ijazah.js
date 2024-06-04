'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ijazah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ijazah.belongsTo(models.user,{
        foreignKey: "user_id",
      })
    }
  }
  ijazah.init({
    user_id: DataTypes.INTEGER,
    origin_school: DataTypes.STRING,
    ijazah_number: DataTypes.STRING,
    ijazah_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ijazah',
  });
  return ijazah;
};