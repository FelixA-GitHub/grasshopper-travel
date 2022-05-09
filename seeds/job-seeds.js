const sequelize = require('../config/connection');
const { Job, Post } = require('../models');

const jobdata = [
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist - Skilled!',
      location: 'Laconia, NH',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$1,500 - $1,800/Weekly Pay',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist - Acute',
      location: 'Richmond, VA',
      job_description: 'FredFlint Travelers, an YabbaDoo Healthcare company, is the leader in allied healthcare staffing. Our relationships with numerous healthcare facilities - including hospitals, home health agencies, school systems, and long-term care facilities - enable us to offer the most current temporary therapy positions and medical imaging jobs. And our traveler customer service is among the best in the industry. YabbaDoo Healthcare is an EEO/AA/Disability/Protected Veteran Employer.  We encourage minority and female applicants to apply.',
      salary: '$1750-$1850 Weekly',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '04/28/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
    {
      title: 'Physical Therapist Needed ASAP!',
      location: 'Mooresville, NC',
      job_description: 'Crunch & Munch Rehab is a dynamic speech pathology, occupational and physical therapy private practice in the Lake Norman areas of Mooresville, Statesville and Denver, NC. We are seeking full time, hourly or contract, NC licensed, or eligible, physical therapists to serve in our Mooresville and Denver clinics.',
      salary: '$80,000',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/01/2022'
    },
];
  
const seedJobs = () => Job.bulkCreate(jobdata, {individualHooks: true});

module.exports = seedJobs;