import { getJobById } from '../utils/job-api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const location = window.location.pathname;
    const split = location.split("/");
    const currentJob = await getJobById(split[split.length - 1]);
    console.log(currentJob);

    // write code to generate html based on currentJob
})
// this needs to show job by id when title is clicked
// fetch("/api/jobs")
//   .then((res) => res.json())
//   .then((data) => {
//     dataArr = data;

//     data.forEach((job) => {
//       document.querySelector(".JobContainer").innerHTML += `
      
//       <form>
//       <input type="hidden" name="avatar_url" id="${job.title}" class="simple-file-upload"> 
//   </form>
  
//             <div class="jobCard">
//              <a href="/application">   <h2>${job.title}</h2> </a>
//                 <p> ${job.location} | ${job.duration} | ${job.salary}</p>

//                 <p> ${job.job_description}</p>
//             </div>
//         `;
//     });
//   });