const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedDescription = require('./description-seeds');
const seedSearch = require('./search-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedDescription();
  console.log('--------------');

  await seedSearch();
  console.log('--------------');

  process.exit(0);
};

seedAll();
