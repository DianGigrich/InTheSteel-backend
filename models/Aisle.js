const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Aisle extends Model {}

Aisle.init(
{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'aisle'
  }
);


module.exports = Aisle;