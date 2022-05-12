let userId;

document.addEventListener('DOMContentLoaded', async () => {
    const location = window.location.pathname;
    const split = location.split("/");
    userId = split[split.length - 1];
    console.log(userId);
    
})

function getJobs() {
    fetch(`/api/jobs/query/${userId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}

var button = document.getElementById("find-jobs");
button.addEventListener("click", getJobs);