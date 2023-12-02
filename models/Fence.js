const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fence extends Model { }

Fence.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Item: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'fence'
  }
);


module.exports = Fence;