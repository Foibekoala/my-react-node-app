// FILE: js/internships.js

document.addEventListener("DOMContentLoaded", () => {
  const internships = document.querySelectorAll(".internship");
  internships.forEach((item) => {
    item.addEventListener("click", () => {
      alert(`You clicked on ${item.querySelector("h3").textContent}`);
    });
  });
});