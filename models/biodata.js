'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biodata.belongsTo(models.user,{
        foreignKey:"user_id"
      })
    }
  }
  biodata.init({
    user_id: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    citizenship: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'biodata',
  });
  return biodata;
};