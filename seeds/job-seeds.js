const sequelize = require('../config/connection');
const { Job, Post } = require('../models');

const jobdata = [
    {
      title: 'Physical Therapist Needed ASAP!',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '80000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    }
];
  
const seedJobs = () => Job.bulkCreate(jobdata, {individualHooks: true});

module.exports = seedJobs;