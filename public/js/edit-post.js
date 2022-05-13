async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const comment = document.querySelector('input[name="post-comment"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      comment,
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
