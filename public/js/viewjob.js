document.addEventListener('DOMContentLoaded', () => {
    getJobById(2);
})

async function getJobById(id) {
    const response = await fetch(`/api/jobs/${id}`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
          }
    })
    const json = await response.json()
    console.log(json.data);
}