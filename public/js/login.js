//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/');
      console.log("Logged in!");
    } else {
      alert(response.statusText);
    }
  }

};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);