const sequelize = require('../config/connection');
const { Application } = require('../models');

const appdata = [
    {
        resume_url: 'https://nasa.gov/donec.json',
        // user_id: 1,
        // job_id: 1
    }
];

const seedApplications = () => Application.bulkCreate(appdata);

module.exports = seedApplications;