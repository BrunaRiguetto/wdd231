const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", e => {
    e.preventDefault();

    formMessage.textContent = "Thank you! We will contact you shortly.";
    form.reset();
});
