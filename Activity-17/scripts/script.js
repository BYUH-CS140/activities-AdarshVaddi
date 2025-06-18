document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let phonePattern = /^\+?[0-9]{1,3}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (username.length < 3) {
    alert("Username must be at least 3 characters.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("Invalid phone number. Use +1-123-456-7890 format.");
    return;
  }

  alert("Form submitted successfully!");
});