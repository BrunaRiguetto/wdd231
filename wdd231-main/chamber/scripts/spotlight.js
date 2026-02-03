const spotlightContainer = document.querySelector(".spotlight-grid");
const membersURL = "data/members.json";

async function loadSpotlights() {
  try {
    const response = await fetch(membersURL);
    const data = await response.json();

    // Filter ONLY Gold and Silver members
    const qualifiedMembers = data.members.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    // Shuffle array randomly
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    // Pick 3 spotlight members
    const selected = shuffled.slice(0, 3);

    displaySpotlights(selected);

  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = "";

  members.forEach(member => {

    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <div class="spotlight-header">
        <h3>${member.name}</h3>
        <p class="tagline">${member.membership} Member</p>
      </div>

      <div class="spotlight-content">
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">

        <div class="spotlight-info">
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>ADDRESS:</strong> ${member.address}</p>
          <p>
            <strong>URL:</strong>
            <a href="${member.website}" target="_blank">Visit Website</a>
          </p>
        </div>
      </div>
    `;

    spotlightContainer.appendChild(card);
  });
}

loadSpotlights();
