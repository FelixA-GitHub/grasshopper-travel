import { getJobById } from '../utils/job-api.js';

let applyButton;
let backButton;

document.addEventListener('DOMContentLoaded', async () => {
    const location = window.location.pathname;
    const split = location.split("/");
    const currentJob = await getJobById(split[split.length - 1]);
    console.log(currentJob);

    // write code to generate html based on currentJob
    var content = document.getElementById("job-posting");
    content.innerHTML = 
    `<h3 class="title">${currentJob.title}</h3>
    <hr></hr>
    <p class="m-5 is-size-5">${currentJob.job_description}</p>
    <p class="is-size-4">Salary: ${currentJob.salary}</p>
    <p class="is-size-5 pt-2">Location: ${currentJob.location}</p>
    <p class="is-size-5 pt-4">${currentJob.job_type}</p>
    <p class="is-size-6 pb-6">Duration: ${currentJob.duration}</p>

    <button class="button is-normal is-success" id="apply-button">Apply Now</button>
    <button class="button is-normal" id="back-button">Back to Dashboard</button>

    <p class="is-size-7 pt-6">Job posted: 05/11/22</p>`
    ;
    applyButton = document.getElementById("apply-button");
    backButton = document.getElementById("back-button");

    backButton.addEventListener("click", function () {
        document.location.replace(`/dashboard`);
    });

    applyButton.addEventListener("click", function () {
        document.location.replace(`/application`);
    });
})





