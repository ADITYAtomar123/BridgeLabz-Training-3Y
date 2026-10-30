"use strict";
const input = document.getElementById("productInput"),
  list = document.getElementById("productList");
document.getElementById("addBtn").addEventListener("click", () => {
  const name = input.value.trim();
  if (!name) return;
  addItem(name);
  input.value = "";
});
function addItem(name) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="name"></span> <button class="edit">Edit</button> <button class="delete">Delete</button>`;
  li.querySelector(".name").textContent = name;
  list.append(li);
}
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  if (e.target.classList.contains("delete")) li.remove();
  if (e.target.classList.contains("edit")) {
    if (li.querySelector(".editInput")) return;
    const span = li.querySelector(".name"),
      input = document.createElement("input");
    input.className = "editInput";
    input.value = span.textContent;
    span.replaceWith(input);
    input.focus();
  }
});
document.addEventListener("click", (e) => {
  const editing = list.querySelector("li .editInput");
  if (editing && !editing.contains(e.target)) {
    const span = document.createElement("span");
    span.className = "name";
    span.textContent = editing.value.trim() || "Unnamed product";
    editing.replaceWith(span);
  }
});
