const seedUsers = require('./user-seeds');
// const seedPosts = require('./post-seeds');
const seedJobs = require('./job-seeds');
const seedApplications = require('./application-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedApplications();
  console.log('--------------');

  // await seedPosts();
  // console.log('--------------');

  await seedJobs();
  console.log('--------------');

  process.exit(0);
};

seedAll();
