let userId;
let jobApps;
let postedJobs;

document.addEventListener('DOMContentLoaded', async () => {
    //gets the user ID from the url on page load
    const location = window.location.pathname;
    const split = location.split("/");
    userId = split[split.length - 1];
    getJobs();
})

async function deleteJob(id) {
    await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
    });
}

function getJobs() {
    // send get request to API with user ID to get list of jobs they created
    fetch(`/api/jobs/query/${userId}`)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((job) => {

                // insert HTML to generate for each job below
                const jobContainer = document.getElementById("job-container");
                const jobCard = document.createElement("div");
                jobCard.setAttribute("class", "pb-4 has-text-centered");
                jobCard.innerHTML = `
                    <div class="card">

                        <header class="card-header">
                            <p class="card-header-title">${job.title} - posted: ${job.post_date}</p>
                        </header>

                        <div class="card-content">
                            <div class="content" id="content-container">
                                ${job.job_description}
                            </div>
                        </div>

                        <footer class="card-footer">
                            <a href="/edit/${job.id}" class="card-footer-item">Edit</a>
                            <button id="delete-btn-${job.id}" value="${job.id}" class="card-footer-item button">Delete</button>
                        </footer>
                    </div>
                `;
                jobContainer.appendChild(jobCard);

                const contentContainer = document.getElementById("content-container");
                const appContent = document.createElement("div");
                jobCard.innerHTML += "Applicants: "

                fetch(`/api/applications/${job.id}`, {
                    method: 'GET'
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        for (let i = 0; i < data.length; i++) {
                            fetch(`/api/user/${data[i].user_id}`, {
                                method: 'GET'
                            })
                            .then((res) => res.json())
                            .then((data) => {
                                let applicant = document.createElement("div");
                                applicant.textContent = `${data.username}, ${data.email}`
                                jobCard.appendChild(applicant);
                            });
                        }
                    } else {
                        appContent.textContent = "No current applications!"
                    }
                })
                

                deleteBtn = document.getElementById(`delete-btn-${job.id}`);
                deleteBtn.addEventListener("click", async (e) => {
                    await fetch(`/api/jobs/${e.target.value}`, {
                    method: 'DELETE'
                    });
                    alert("Job deleted");
                    window.location.replace("/createdjobs");
                    
                });
            });
        });
}