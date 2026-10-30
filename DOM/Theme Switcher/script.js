"use strict";
document
  .querySelectorAll("button[data-theme]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      document.body.setAttribute("data-theme", button.dataset.theme),
    ),
  );
