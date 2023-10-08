const Aisle = require('./Aisle');
const User = require('./User');
const Item = require('./Item');

Aisle.hasMany(Item);
Item.belongsTo(Aisle);

module.exports = { Aisle, Item, User };
