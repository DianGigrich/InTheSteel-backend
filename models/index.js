const Aisle = require('./Aisle');
const Column = require('./Column');
const User = require('./User');
const Item = require('./Item');


Aisle.hasMany(Column);
Aisle.hasMany(Item);
Column.hasMany(Item);
Item.belongsTo(Column);
Item.belongsTo(Aisle);

module.exports = { Aisle, Column, User ,Item};
