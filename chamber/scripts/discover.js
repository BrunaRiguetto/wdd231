import { places } from "../data/discover.mjs";

const grid = document.querySelector("#discover-grid");

/* BUILD CARDS */
places.forEach((place, index) => {
  const card = document.createElement("section");
  card.classList.add("discover-card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  grid.appendChild(card);
});

/* VISIT MESSAGE */
const message = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    message.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);
