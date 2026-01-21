const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// Footer dates
document.getElementById("lastModified").textContent = document.lastModified;

// Fetch Members Data
const url = "data/members.json";

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMembers();

// Display Members
function displayMembers(members) {

  members.forEach(member => {

    const card = document.createElement("section");
    card.classList.add("member-card");

    const name = document.createElement("h3");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = member.address;

    const phone = document.createElement("p");
    phone.textContent = member.phone;

    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = member.website;
    website.target = "_blank";

    const image = document.createElement("img");
    image.src = `images/${member.image}`;
    image.alt = member.name;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);


    membersContainer.appendChild(card);
  });
}

// Toggle View Buttons
gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

document.getElementById("year").textContent = new Date().getFullYear();


async function displayCompanies() {
    const response = await fetch('data/members.json');
    const companies = await response.json();
    companies.forEach(company => {
        const section = document.createElement('section');
    
        section.innerHTML = `
        <h3>${company.companyName}</h3>
 
        <img src="images/${company.imageFile}" alt="${company.companyName}">
        <p>Phone: ${company.phone}</p>
        <a href="${company.websiteURL}" target="_blank">Visit Website</a>
        `;
    
        container.appendChild(section);
    });
}