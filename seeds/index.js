const seedConsultants = require('./consultant-seeds');
// const seedPosts = require('./post-seeds');
const seedJobs = require('./job-seeds');
const seedEmployers = require('./employer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  // await seedConsultants();
  // console.log('--------------');

  // await seedPosts();
  // console.log('--------------');

  await seedJobs();
  console.log('--------------');

  await seedEmployers();
  console.log('--------------');

  process.exit(0);
};

seedAll();
