// FILE: js/investments.js

document.addEventListener("DOMContentLoaded", () => {
  const investments = document.querySelectorAll(".investment");
  investments.forEach((item) => {
    item.addEventListener("click", () => {
      alert(`You clicked on: ${item.querySelector("h3").textContent}`);
    });
  });
});