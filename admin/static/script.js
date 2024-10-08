document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.querySelector("#sign-in-btn");
  const signUpBtn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  // Hover effects for buttons
  const buttons = [signInBtn, signUpBtn];
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
      button.style.transition = "transform 0.2s ease-in-out";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });

  // Show tooltips on hover
  buttons.forEach(button => {
    button.setAttribute("data-toggle", "tooltip");
    button.setAttribute("title", button.innerText);
    $(button).tooltip(); // Ensure you include jQuery and Bootstrap's JS for tooltips
  });

  // Toggle sign-up mode
  signUpBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  // Toggle sign-in mode
  signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Form submission handling with error messages
  const loginForm = document.getElementById("login-form");
  const signUpForm = document.querySelector(".sign-up-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Basic validation
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate an API call
    setTimeout(() => {
      alert("Login successful!");
      // Redirect to the dashboard or perform login action
    }, 500);
  });

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const fullName = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    // Basic validation
    if (!fullName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate an API call
    setTimeout(() => {
      alert("Sign up successful!");
      // Redirect to the dashboard or perform signup action
    }, 500);
  });
});
