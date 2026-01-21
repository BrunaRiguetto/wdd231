/*
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
*/

const menuButton = document.querySelector("#menuButton");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");
});
