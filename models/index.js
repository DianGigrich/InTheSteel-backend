const Aisle = require('./Aisle');
const User = require('./User');
const Item = require('./Item');
const MyFence = require('./MyFence');


Aisle.hasMany(Item);
Item.belongsTo(Aisle);
MyFence.hasMany(Item);


module.exports = { Aisle, Item, User, MyFence };
