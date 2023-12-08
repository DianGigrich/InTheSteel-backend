const Aisle = require('./Aisle');
const User = require('./User');
const Item = require('./Item');
const Fence = require('./Fence');


Aisle.hasMany(Item);
Item.belongsTo(Aisle);
Fence.hasMany(Item);


module.exports = { Aisle, Item, User, MyFence };
