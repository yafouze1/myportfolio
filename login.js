// Predefined login credentials
const validUsername = "3info2";
const validPassword = "sti2024";

// Add event listener to the form
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get values from input fields
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    // Redirect to the home page on successful login
    window.location.href = "accueil.html"; // Replace with your home page URL
  } else {
    // Show error message for incorrect credentials
    errorMessage.textContent =
      "Invalid username or password. Please try again.";
  }
});
