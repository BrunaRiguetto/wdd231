const courses = [
  { code: "WDD 130", type: "wdd", credits: 2, completed: true },
  { code: "WDD 131", type: "wdd", credits: 2, completed: true },
  { code: "WDD 231", type: "wdd", credits: 2, completed: false },
  { code: "CSE 110", type: "cse", credits: 2, completed: true }
];

const container = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";

  totalCredits.textContent =
    list.reduce((sum, c) => sum + c.credits, 0);

  list.forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    if (course.completed) div.classList.add("completed");
    div.textContent = `${course.code} (${course.credits})`;
    container.appendChild(div);
  });
}

document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    displayCourses(type === "all" ? courses : courses.filter(c => c.type === type));
  });
});

displayCourses(courses);
