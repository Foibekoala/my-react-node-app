// FILE: js/scholarships.js

document.addEventListener("DOMContentLoaded", () => {
  const scholarships = document.querySelectorAll(".scholarship");
  scholarships.forEach((item) => {
    item.addEventListener("click", () => {
      alert(`You selected: ${item.querySelector("h3").textContent}`);
    });
  });
});