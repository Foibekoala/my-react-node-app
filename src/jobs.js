// FILE: js/jobs.js

document.addEventListener("DOMContentLoaded", () => {
  const jobs = document.querySelectorAll(".job");
  jobs.forEach((item) => {
    item.addEventListener("click", () => {
      alert(`You selected: ${item.querySelector("h3").textContent}`);
    });
  });
});