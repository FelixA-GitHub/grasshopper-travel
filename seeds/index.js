const seedUsers = require('./user-seeds');
// const seedPosts = require('./post-seeds');
const seedJobs = require('./job-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
<<<<<<< HEAD
  // await seedConsultants();
  // console.log('--------------');
=======
  await seedUsers();
  console.log('--------------');
>>>>>>> 7c8ee4643d7c79a7dfbb3bbe5a8153306a806a57

  // await seedPosts();
  // console.log('--------------');

  await seedJobs();
  console.log('--------------');

  process.exit(0);
};

seedAll();
