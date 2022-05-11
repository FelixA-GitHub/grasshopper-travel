const seedUsers = require('./user-seeds');
// const seedPosts = require('./post-seeds');
const seedJobs = require('./job-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  // await seedPosts();
  // console.log('--------------');

  await seedJobs();
  console.log('--------------');

  process.exit(0);
};

seedAll();
