const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', () => {
  // Perform logout logic here
  // This could involve sending an AJAX request to the server,
  // updating the user's session, or redirecting the user
  // to a login page
  window.location.href = 'login.html';
});
