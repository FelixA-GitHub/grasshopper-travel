fetch("/api/jobs/")
  .then((res) => res.json())
  .then((data) => {
    dataArr = data;

    data.forEach((job) => {
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
                            <a href="/job/${job.id}" class="card-footer-item">More Details</a>
                        </footer>
                    </div>
                </div>
        `;
    });
  });
