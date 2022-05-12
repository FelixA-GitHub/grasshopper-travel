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
                <div class="pb-4">
                    <div class="card">

                        <header class="card-header">
                            <p class="card-header-title">${job.title}</p>
                        </header>

                        <div class="card-content">
                            <div class="content">
                                ${job.job_description}
                            </div>
                        </div>

                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Edit</a>
                            <a href="#" class="card-footer-item">Delete</a>
                        </footer>
                    </div>
                </div>
                `;
            });
        });
}