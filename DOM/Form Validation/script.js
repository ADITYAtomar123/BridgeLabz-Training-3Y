"use strict";
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  const n = name.value.trim(),
    em = email.value.trim(),
    pw = password.value;
  nameError.textContent = n ? "" : "Name is required";
  emailError.textContent = em.includes("@") ? "" : "Email must contain @";
  passwordError.textContent =
    pw.length >= 6 ? "" : "Password must be at least 6 characters";
  valid = !!n && em.includes("@") && pw.length >= 6;
  success.textContent = valid ? "Form submitted successfully!" : "";
});
