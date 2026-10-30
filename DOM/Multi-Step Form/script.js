"use strict";
const s1 = document.getElementById("step1"),
  s2 = document.getElementById("step2"),
  s3 = document.getElementById("step3");
document.getElementById("next1").onclick = () => {
  if (!name.value.trim() || !email.value.includes("@"))
    return alert("Enter valid name and email");
  s1.hidden = true;
  s2.hidden = false;
};
document.getElementById("back").onclick = () => {
  s2.hidden = true;
  s1.hidden = false;
};
document.getElementById("next2").onclick = () => {
  if (password.value.length < 6)
    return alert("Password must be at least 6 characters");
  summary.textContent = `Name: ${name.value}; Email: ${email.value}`;
  s2.hidden = true;
  s3.hidden = false;
};
document.getElementById("back2").onclick = () => {
  s3.hidden = true;
  s2.hidden = false;
};
