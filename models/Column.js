const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our column model
class Column extends Model {}

// create fields/columns for model
Column.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    column: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'column'
  }
);

module.exports = Column;