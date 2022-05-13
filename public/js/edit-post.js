import { getJobById } from '../utils/job-api.js';

let jobTitle = document.getElementById("job-title");
let jobLocation = document.getElementById("job-location");
let jobDescription = document.getElementById("job-description");
let jobSalary = document.getElementById("job-salary");
let jobType = document.getElementById("job-type");
let jobDuration = document.getElementById("job-duration");

document.addEventListener('DOMContentLoaded', async () => {
    //gets the user ID from the url on page load
    const location = window.location.pathname;
    const split = location.split("/");
    const currentJob = await getJobById(split[split.length - 1]);
    
    jobTitle.value = currentJob.title;
    jobLocation.value = currentJob.location;
    jobDescription.value = currentJob.job_description;
    jobSalary.value = currentJob.salary;
    jobType.value = currentJob.job_type;
    jobDuration.value = currentJob.duration;
})

