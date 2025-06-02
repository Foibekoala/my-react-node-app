// FILE: js/career.js

// Page-specific functionality for Career Guidance page

document.addEventListener("DOMContentLoaded", () => {
  const tips = document.querySelectorAll(".tip");
  tips.forEach((tip) => {
    tip.addEventListener("click", () => {
      tip.classList.toggle("expanded");
    });
  });
});