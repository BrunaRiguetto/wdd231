// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Animate membership cards on load
const cards = document.querySelectorAll(".membership-card");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 150);
});
