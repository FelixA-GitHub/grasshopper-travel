
//We can call this function from our frontend to log out of the current session
function logout() {
  fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  })
    .then(function () {
      //return to the homepage route
      document.location.replace("/login");
    })
    .catch(err => console.log(err));
}

// async function logout() {
//   const response = await fetch('/api/user/logout', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' }
//   });

//   if (response.ok) {
//     document.location.replace('/login');
//   } else {
//     alert(response.statusText);
//   }
// }

document.querySelector('#logout-btn').addEventListener("click", logout);