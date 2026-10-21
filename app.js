console.log('Hello World!');
const ownerName = "Connor Hansen";
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}
window.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting-container");
    if (greetingElement) {
        greetingElement.textContent = showGreeting(ownerName);
    }
});
document.getElementById("skillForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stops the page from reloading
    const input = document.getElementById("skillInput");
    const skill = input.value.trim();
    if (skill === "") return;
    const badge = document.createElement("span");
    badge.className = "badge bg-primary fs-6";
    badge.textContent = skill;
    document.getElementById("skillsList").appendChild(badge);
    input.value = "";
});
const projectTitles = [
    "Project 1: Simple Calculator",
    "Project 2: Random Number Game",
    "Project 3: Group Short Film"
];
const projectDescriptions = [
    "A Python calculator that does addition, subtraction, multiplication, and division.",
    "A Python game that generates a random number and says higher or lower until you guess it.",
    "A short film made with a group and fully edited."
];
const projectDeadlines = [
    "2026-09-15",
    "2026-10-01",
    "2026-12-15"
];
function displayProjects() {
    const container = document.getElementById("projectsContainer");
    const today = new Date();
    for (let i = 0; i < projectTitles.length; i++) {
        const deadline = new Date(projectDeadlines[i]);
    let status;
    if (deadline > today) {
            status = "Ongoing";
        } else {
            status = "Completed";
        }
        const badgeColor = (status === "Ongoing") ? "bg-success" : "bg-secondary";
        const col = document.createElement("div");
        col.className = "col-md-6";
        col.innerHTML = `
            <div class="card h-100 border">
                <div class="card-body">
                    <span class="badge ${badgeColor} mb-2 project-status">${status}</span>
                    <h3 class="h5 card-title fw-bold">${projectTitles[i]}</h3>
                    <p class="card-text">${projectDescriptions[i]}</p>
                    <p class="mb-0"><strong>Deadline:</strong> ${projectDeadlines[i]}</p>
                </div>
            </div>`;
        container.appendChild(col);
    }
}
displayProjects();
let downloadCount = 0;
function downloadResume() {
    downloadCount++;
    document.getElementById("download-count").textContent = downloadCount;
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "resume.pdf";
    link.click();
}
document.getElementById("download-btn").addEventListener("click", downloadResume);
function buildTable(containerId, headers, rows) {
    const container = document.getElementById(containerId);
    const table = document.createElement("table");
    table.className = "table table-striped table-hover";
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headers.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let i = 0; i < rows.length; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < rows[i].length; j++) {
            const td = document.createElement("td");
            td.textContent = rows[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    container.appendChild(table);
}
buildTable(
    "educationContainer",
    ["Institution", "Focus", "Start / End Dates"],
    [
        ["Northern Arizona University", "Mathematics, Science, Computer Science", "Aug 2025 - May 2029 (expected)"]
    ]
);
buildTable(
    "experienceContainer",
    ["Job Title / Role", "Company", "Start / End Dates"],
    [
        ["Community Assistant", "Northern Arizona University", "Aug 2026 - Present"]
    ]
);