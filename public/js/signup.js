//(PLACEHOLDER) function to gather form data and call our "POST /api/user" express route
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const radioButtons = document.querySelectorAll('input[name="role"]');
  let role;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        role = radioButton.value;
        break;
    }
  }

  if (username && email && password && role) {
    console.log(role);
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