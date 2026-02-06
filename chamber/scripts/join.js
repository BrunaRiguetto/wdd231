// ===============================
// Timestamp (hidden field)
// ===============================
const timestampField = document.getElementById("timestamp");
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// ===============================
// Footer year
// ===============================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===============================
// Animate membership cards on load
// ===============================
const cards = document.querySelectorAll(".membership-card");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 150);
});

// ===============================
// Modal open buttons
// ===============================
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.showModal();
    }
  });
});

// ===============================
// Modal close buttons
// ===============================
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog) {
      dialog.close();
    }
  });
});
