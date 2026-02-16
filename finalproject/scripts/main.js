// ===============================
// FOOTER YEAR
// ===============================

const yearSpan = document.querySelector("#year");

if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}


// ===============================
// HAMBURGER MENU TOGGLE
// ===============================

const menuButton = document.querySelector("#menuButton");
const primaryNav = document.querySelector("#primaryNav");

if (menuButton && primaryNav) {

    menuButton.addEventListener("click", () => {
        primaryNav.classList.toggle("open");
    });

}
