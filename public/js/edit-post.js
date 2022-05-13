async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="job-title"]').value.trim();
  const description = document.querySelector('input[name="job-description"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
      // description: comment
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/createdjobs/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.card-footer-item').addEventListener('edit', editFormHandler);
