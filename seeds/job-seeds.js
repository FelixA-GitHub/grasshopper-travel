const sequelize = require('../config/config');
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
      job_description: 'Remarkable SNF is looking for a highly motivated and energetic therapist to join the team. Candidates must be willing to support a friendly, positive and professional environment.',
      salary: '$1,500 - $1,800/Weekly Pay',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/05/2022'
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
      title: 'Physical Therapist - Rehabilitation',
      location: 'Avalon, CA',
      job_description: 'ChaCha Rehab is a private, physical therapist owned practice in Avalon, CA. We pride ourselves on our longevity in the area, with this summer marking our 23rd anniversary!',
      salary: '$1,900/Weekly Pay',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '04/30/2022'
    },
    {
      title: 'Physical Therapist - Pediatric Clinic ',
      location: 'Seattle, WA',
      job_description: 'KidPT is the largest and fastest growing multi-disciplinary rehabilitation treatment organization in Washington State. What sets us apart is our ability to provide all pediatric services under one roof and our team approach to patient care. We provide Occupational, Physical, Speech Therapy services to children birth to 18 years of age in our 11 clinics.',
      salary: '$62.4K - $79K estimated',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '04/21/2022'
    },
    {
      title: 'Physical Therapist - Adult Outpatient',
      location: 'Buffalo, NY',
      job_description: 'Jetsons Rehab & Sports Therapy started out as a single outpatient practice offering Physical Therapy in Buffalo, NY in 1987. In the 30 years since, we have expanded to more than 15 clinics in North and South Carolina and are continuing to grow.',
      salary: '$69.9K - $88.5K estimated',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/02/2022'
    },
    {
      title: 'Physical Therapist - PT',
      location: 'Los Angeles, CA',
      job_description: 'Smurfs Rehabilitation works across a vast continuum of healthcare environments including hospitals, skilled nursing, assisted living and home health. We foster trust, build relationships, and strive for excellence; for our partners, for our employees, and most importantly, for the people we care for. Our teams of physical therapists, occupational therapists, and speech language pathologists empower people to achieve what they never thought possible: their maximum independence.',
      salary: 'Inquire, Paid Weekly',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/09/2022'
    },
    {
      title: 'Pediatric Physical Therapist or Assistant',
      location: 'Orlando, FL',
      job_description: 'Little Toes Pediatric Therapy is an in home and school based physical and occupational therapy company based in Orlando, FL. We have been growing rapidly and are looking for an experienced pediatric physical therapist or assistant to join our dynamic team. If you believe in patient centered care and enjoy working with other disciplines to provide the very best for the child, this job is for you!',
      salary: 'Up to $100,000 a year',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/06/2022'
    },
    {
      title: 'Physical Therapist - Inpatient Rehab',
      location: 'Hartford, Conn',
      job_description: 'At AyYiYi Healthcare, we focus on individualized, long-term career planning for our travelers. Plus, with thousands of assignments across the country, Aya gets you the front-of-the-line access you want at exclusive hospitals.',
      salary: 'Up to $2,242 a week',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '05/07/2022'
    },
    {
      title: 'Travel Physical Therapist',
      location: 'Chicago, IL',
      job_description: 'At RightSaidFredMed, our aim is to be the last company you ever work with. We prove it, too, with the highest compensation, first day medical benefits, a best in industry 401(K) retirement plan, and fiduciary services offered through Creative Planning. You will have low fee, low cost funds such as Vanguard and a variety of other investment selections that will help you reach financial security and ultimately, financial freedom! We don’t just deliver a dream for your assignment, we want you to live your dream without the need to work!',
      salary: '$2770.40 Per Week',
      job_type: 'Contract',
      duration: '13 weeks',
      post_date: '04/24/2022'
    },
];
  
const seedJobs = () => Job.bulkCreate(jobdata, {individualHooks: true});

module.exports = seedJobs;