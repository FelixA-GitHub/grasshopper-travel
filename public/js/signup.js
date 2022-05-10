//(PLACEHOLDER) function to gather form data and call our "POST /api/user" express route
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  const role = 1;

  if (username && email && password) {
    const response = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email,
        role
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);