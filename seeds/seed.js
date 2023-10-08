const sequelize = require('../config/connection');
const { Item, User, Aisle} = require('../models');

const itemSeedData = require('./itemSeedData.json');
const userSeedData = require('./userSeedData.json');
const aisleSeedData = require('./aisleSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const items = await Item.bulkCreate(itemSeedData);
  const users = await User.bulkCreate(userSeedData);
  const aisles = await Aisle.bulkCreate(aisleSeedData);

  process.exit(0);
};

seedDatabase();