import { getJobById } from '../utils/job-api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const location = window.location.pathname;
    const split = location.split("/");
    const currentJob = await getJobById(split[split.length - 1]);
    console.log(currentJob);

    // write code to generate html based on currentJob
})