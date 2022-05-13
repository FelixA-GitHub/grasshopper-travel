async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/createdjobs/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.card-footer-item').addEventListener('click', deleteFormHandler);
