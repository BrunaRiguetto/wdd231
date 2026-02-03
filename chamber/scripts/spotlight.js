const spotlightContainer = document.querySelector('.home-grid');

const membersURL = 'data/members.json';

// Fetch Members
async function getSpotlights() {
  try {
    const response = await fetch(membersURL);

    if (response.ok) {
      const data = await response.json();
      displaySpotlights(data.members);
    } else {
      throw Error(await response.text());
    }

  } catch (error) {
    console.log(error);
  }
}

function displaySpotlights(members) {
  // Filter for Silver (2) or Gold (3)
  const qualified = members.filter(member =>
    member.membership === 2 || member.membership === 3
  );

  // Shuffle
  const shuffled = qualified.sort(() => 0.5 - Math.random());

  // Pick 3 (Indices 0, 1, 2)
  const selected = shuffled.slice(0, 3);

  // Clear the container so you don't keep adding 
  // more cards every time the function runs
  spotlightContainer.innerHTML = '';

  selected.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');

    card.innerHTML = `
      <div class="spotlight-header">
        <h3>${member.name}</h3>
        <p class="tagline">${member.industry}</p>
      </div>
      <div class="spotlight-content">
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <div class="spotlight-info">
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>ADDRESS:</strong> ${member.address}</p>
          <p><strong>LEVEL:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
          <p><strong>URL:</strong> 
            <a href="${member.website}" target="_blank">Visit Website</a>
          </p>
        </div>
      </div>
    `;
    spotlightContainer.appendChild(card);
  });
}

getSpotlights();
