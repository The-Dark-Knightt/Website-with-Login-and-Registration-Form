const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelector(".fa-eye-slash");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// select the login form
const loginForm = document.querySelector(".login_form form");

// when form is submitted
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop refresh/redirect

  // grab values
  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  // simple check
  if (email && password) {
    alert("Login successful for: " + email);
    // later you can replace this with fetch() to send to backend
  } else {
    alert("Please fill in both fields!");
  }
});
