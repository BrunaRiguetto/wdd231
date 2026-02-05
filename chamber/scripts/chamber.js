// ===== FOOTER DATES (SAFE ON ALL PAGES) =====
const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== DIRECTORY ELEMENTS =====
const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// Only run directory code if container exists
if (membersContainer) {

  const url = "data/members.json";

  async function getMembers() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch members data");
      }

      const data = await response.json();
      displayMembers(data.members);

    } catch (error) {
      console.error("Members fetch error:", error);
    }
  }

  getMembers();

  // ===== DISPLAY MEMBERS =====
  function displayMembers(members) {

    members.forEach(member => {

      const card = document.createElement("div");
      card.classList.add("member-card");

      const name = document.createElement("h3");
      name.textContent = member.name;

      const address = document.createElement("p");
      address.textContent = member.address;

      const phone = document.createElement("p");
      phone.textContent = member.phone;

      const websiteButton = document.createElement("a");
      websiteButton.href = member.website;
      websiteButton.textContent = "Visit Website";
      websiteButton.target = "_blank";
      websiteButton.classList.add("visit-btn");

      const image = document.createElement("img");
      image.src = `images/${member.image}`;
      image.alt = member.name;
      image.loading = "lazy";

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(websiteButton);

      membersContainer.appendChild(card);
    });
  }

  // ===== VIEW TOGGLE BUTTONS =====
  if (gridButton && listButton) {

    gridButton.addEventListener("click", () => {
      membersContainer.classList.add("grid");
      membersContainer.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
      membersContainer.classList.add("list");
      membersContainer.classList.remove("grid");
    });

  }

}
