document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const errorMessages = document.getElementById("errorMessages");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessages.innerHTML = "";
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (username === "") {
      displayError("Username cannot be empty");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      displayError("Invalid email address");
      return;
    }
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      displayError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return;
    }
    form.reset();
    alert("Registration successful!");
  });
  function displayError(message) {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorMessages.appendChild(errorMessage);
  }
});
