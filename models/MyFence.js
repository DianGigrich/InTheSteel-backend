const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MyFence extends Model { }

MyFence.init(
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
    modelName: 'myfence'
  }
);


module.exports = MyFence;