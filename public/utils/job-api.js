export const createJob = async (title, location, description, salary, type, duration) => {
  try {
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
    const json = await response.json();
    return json;
  }  
  catch (err) {
    console.log(err);
  }
}

export const getJobById = async (id) => {
  const response = await fetch(`/api/jobs/${id}`, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
          }
    })
    const json = await response.json()
    return json.data;
}