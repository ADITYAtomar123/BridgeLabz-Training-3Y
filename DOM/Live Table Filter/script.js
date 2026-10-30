"use strict";
const filter = document.getElementById("filter"),
  rows = [...document.querySelectorAll("#rows tr")],
  empty = document.getElementById("empty");
filter.addEventListener("input", () => {
  let visible = 0;
  rows.forEach((row) => {
    const match = row.textContent
      .toLowerCase()
      .includes(filter.value.toLowerCase());
    row.hidden = !match;
    if (match) visible++;
  });
  empty.hidden = visible > 0;
});
