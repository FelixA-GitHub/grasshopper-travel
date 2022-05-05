// //We can call this function from our frontend to log out of the current session
// function logout() {
//   fetch("/api/user/logout", {
//     method: "post",
//     headers: { "Content-Type": "application/json" }
//   })
//     .then(function () {
//       //return to the homepage route
//       document.location.replace("/");
//     })
//     .catch(err => console.log(err));
// }

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);
