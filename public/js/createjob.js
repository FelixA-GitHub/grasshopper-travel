import { createJob } from '../utils/job-api.js';

//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector('#job-title').value.trim();
    const location = document.querySelector('#job-location').value.trim();
    const description = document.querySelector('#job-description').value.trim();
    const salary = document.querySelector('#job-salary').value.trim();
    const type = document.querySelector('#job-type').value.trim();
    const duration = document.querySelector('#job-duration').value.trim();
  
    if (title && location && description && salary && type && duration) {
      createJob(title, location, description, salary, type, duration)
      .then(job => {
        document.location.replace(`/job/${job.id}`);
      });

    }
  
  };
  
  document.querySelector('.posting-form').addEventListener('submit', loginFormHandler);