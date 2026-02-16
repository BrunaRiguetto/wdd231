
// ===== ELEMENT REFERENCES =====
const projectsContainer = document.getElementById("projectsContainer");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const sortSelect = document.getElementById("sortSelect");
const modal = document.getElementById("projectModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");
const yearSpan = document.getElementById("year");

let projects = [];
let currentFilter = localStorage.getItem("selectedStyle") || "All";

// ===== FOOTER YEAR =====
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ===== FETCH PROJECT DATA =====
async function loadProjects() {
    try {
        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Failed to fetch project data.");
        }

        projects = await response.json();

        displayProjects();
        setActiveFilterButton();

    } catch (error) {
        projectsContainer.innerHTML =
            "<p>Unable to load projects at this time.</p>";
    }
}

// ===== DISPLAY PROJECTS =====
function displayProjects() {
    let filteredProjects =
        currentFilter === "All"
            ? projects
            : projects.filter(project => project.style === currentFilter);

    const sortValue = sortSelect.value;

    if (sortValue === "price-asc") {
        filteredProjects.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
        filteredProjects.sort((a, b) => b.price - a.price);
    } else if (sortValue === "size-asc") {
        filteredProjects.sort((a, b) => a.size - b.size);
    } else if (sortValue === "size-desc") {
        filteredProjects.sort((a, b) => b.size - a.size);
    }

    projectsContainer.innerHTML = filteredProjects
        .map(project => `
        <div class="project-card" data-id="${project.id}">
        
        <div class="card-image">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
        </div>

        <div class="card-body">
            <h3>${project.name}</h3>

            <p class="price">
            R$ ${project.price.toLocaleString("pt-BR")}
            </p>

            <p class="location">${project.location}</p>

            <div class="details-row">
            <span>${project.size} m²</span>
            <span>${project.style}</span>
            </div>

            <button class="details-btn">+ DETALHES</button>
        </div>

        </div>
    `)
        .join("");


    addCardClickEvents();
}

// ===== FILTER BUTTON HANDLING =====
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.style;
        localStorage.setItem("selectedStyle", currentFilter);

        setActiveFilterButton();
        displayProjects();
    });
});

function setActiveFilterButton() {
    filterButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.style === currentFilter
        );
    });
}

// ===== SORT HANDLING =====
sortSelect.addEventListener("change", displayProjects);

// ===== MODAL FUNCTIONALITY =====
function addCardClickEvents() {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = parseInt(card.dataset.id);
            const selectedProject = projects.find(p => p.id === projectId);

            modalDetails.innerHTML = `
                <h3>${selectedProject.name}</h3>
                <img src="${selectedProject.image}" alt="${selectedProject.name}">
                <p>${selectedProject.description}</p>
                <p><strong>Location:</strong> ${selectedProject.location}</p>
                <p><strong>Price:</strong> R$ ${selectedProject.price.toLocaleString("pt-BR")}</p>
                <p><strong>Size:</strong> ${selectedProject.size} m²</p>
                <p><strong>Style:</strong> ${selectedProject.style}</p>
            `;

            modal.classList.remove("hidden");
        });
    });
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// ===== INITIAL LOAD =====
loadProjects();
