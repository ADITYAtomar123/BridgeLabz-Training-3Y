"use strict";
const modal = document.getElementById("modal"),
  large = document.getElementById("large");
document.querySelectorAll(".gallery img").forEach((img) =>
  img.addEventListener("click", () => {
    large.src = img.src;
    modal.hidden = false;
  }),
);
document
  .querySelector(".content")
  .addEventListener("click", (e) => e.stopPropagation());
modal.addEventListener("click", () => (modal.hidden = true));
document
  .getElementById("close")
  .addEventListener("click", () => (modal.hidden = true));
