//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector('#job-title').value.trim();
    const location = document.querySelector('#job-location').value.trim();
    const description = document.querySelector('#job-description').value.trim();
    const salary = document.querySelector('#job-salary').value.trim();
    const type = document.querySelector('#job-type').value.trim();
    const duration = document.querySelector('#job-duration').value.trim();
  
    if (title && location && description && salary && type && duration) {
     
      const response = await fetch('/api/jobs/create/', {
        method: 'POST',
        body: JSON.stringify({
          title,
          location,
          description,
          salary,
          type,
          duration
        }),
        headers: { 
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        // document.location.replace('/dashboard');
        console.log("Job posted!");
      } else {
        alert(response.statusText);
      }
    }
  
  };
  
  document.querySelector('.posting-form').addEventListener('submit', loginFormHandler);