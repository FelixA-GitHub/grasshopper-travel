let userId;
let postedJobs;

document.addEventListener('DOMContentLoaded', async () => {
    //gets the user ID from the url on page load
    const location = window.location.pathname;
    const split = location.split("/");
    userId = split[split.length - 1];
    getJobs();
})

function getJobs() {
    // send get request to API with user ID to get list of jobs they created
    fetch(`/api/jobs/query/${userId}`)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((job) => {
                // insert HTML to generate for each job below
                document.getElementById("job-container").innerHTML += `
                
                `;
            });
        });
}