"use strict";
const toggle = document.getElementById("toggle"),
  menu = document.getElementById("menu");
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.hidden = !menu.hidden;
});
menu.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    document.getElementById("selected").textContent =
      "Selected: " + e.target.dataset.value;
    toggle.textContent = e.target.textContent + " ▾";
    menu.hidden = true;
  }
});
document.addEventListener("click", () => (menu.hidden = true), true);
