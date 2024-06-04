'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class health extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      health.belongsTo(models.user,{
        foreignKey: "user_id",
      })
    }
  }
  health.init({
    user_id: DataTypes.INTEGER,
    helath_score: DataTypes.FLOAT,
    health_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'health',
  });
  return health;
};