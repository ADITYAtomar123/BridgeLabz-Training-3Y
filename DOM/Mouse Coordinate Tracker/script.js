"use strict";

const area = document.getElementById("area"),
  coords = document.getElementById("coords");
area.addEventListener("mousemove", (e) => {
  const r = area.getBoundingClientRect();
  coords.textContent = `X: ${Math.round(e.clientX - r.left)}, Y: ${Math.round(e.clientY - r.top)}`;
});
area.addEventListener("dblclick", (e) => {
  const r = area.getBoundingClientRect(),
    dot = document.createElement("span");
  dot.className = "dot";
  dot.style.left = e.clientX - r.left + "px";
  dot.style.top = e.clientY - r.top + "px";
  area.append(dot);
});
