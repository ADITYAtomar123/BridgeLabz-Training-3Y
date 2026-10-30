"use strict";
const textarea = document.getElementById("message"),
  count = document.getElementById("count");
function update() {
  let left = 100 - textarea.value.length;
  count.textContent = left + " characters remaining";
  count.style.color = left === 0 ? "red" : left <= 20 ? "#d99a00" : "black";
}
textarea.addEventListener("input", update);
textarea.addEventListener("beforeinput", (e) => {
  if (
    textarea.value.length >= 100 &&
    e.data &&
    e.inputType.startsWith("insert")
  )
    e.preventDefault();
});
document.getElementById("reset").addEventListener("click", () => {
  textarea.value = "";
  update();
});
update();
