fetch("/api/jobs/")
  .then((res) => res.json())
  .then((data) => {
    dataArr = data;

    data.forEach((job) => {
      document.querySelector(".jobContainer").innerHTML += `
      
      <form>
      <input type="hidden" name="avatar_url" id="${job.title}" class="simple-file-upload"> 
  </form>
  
            <div class="jobCard">
             <a href="/application">   <h2>${job.title}</h2> </a>
                <p> ${job.location} | ${job.duration} | ${job.salary}</p>

                <p> ${job.job_description}</p>
            </div>
        `;
    });
  });
