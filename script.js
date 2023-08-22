// Sample assignment data
const assignments = [
    { name: "Math Assignment", dueDate: "August 24" },
    { name: "Science Assignment", dueDate: "August 25" },
    { name: "Spanish Assignment", dueDate: "August 26" },
    { name: "English Assignment", dueDate: "August 27" },
    { name: "History Assignment", dueDate: "August 28" },
    { name: "Art Assignment", dueDate: "August 29" },
    { name: "Cooking Assignment", dueDate: "August 30" },
    { name: "Research Assignment", dueDate: "August 31" },
    // Add more assignments here
];

// Greetings based on time of day
const currentHour = new Date().getHours();
let greeting = "";
if (currentHour >= 0 && currentHour < 7) {
    greeting = "Rise and shine";
} else if (currentHour >= 7 && currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

// Display the greeting
document.getElementById("greeting").textContent = `${greeting}, Lucas!`;

// Function to display all assignments
function displayAssignments() {
    assignmentBox.innerHTML = ''; // Clear existing assignments

    assignments.forEach((assignment) => {
        assignmentBox.innerHTML += `
            <div class="assignment">
                <h3>${assignment.name}</h3>
                <p>Description: Description here</p>
                <p>Due: ${assignment.dueDate}</p>
            </div>
        `;
    });
}

// Get a reference to the assignment box and the slider buttons
const assignmentBox = document.querySelector(".assignment-box");
const leftButton = document.querySelector(".slider-button-left");
const rightButton = document.querySelector(".slider-button-right");
const seeMoreButton = document.querySelector(".see-more-button");

let currentIndex = 0;

// Event listeners for slider buttons
rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % assignments.length;
    displayAssignments();
});

leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + assignments.length) % assignments.length;
    displayAssignments();
});
// Function to display assignment details overlay
function displayAssignmentOverlay(assignment) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const detailsBox = document.createElement("div");
    detailsBox.className = "assignment-details";

    const closeButton = document.createElement("div");
    closeButton.className = "close-button";
    closeButton.textContent = "X";
    closeButton.addEventListener("click", () => {
        overlay.remove();
    });

    detailsBox.innerHTML = `
        <h2>${assignment.name}</h2>
        <p>Description: Description here</p>
        <p>Due: ${assignment.dueDate}</p>
    `;

    detailsBox.appendChild(closeButton);
    overlay.appendChild(detailsBox);
    document.body.appendChild(overlay);
}

// Event listener for assignment boxes
assignmentBox.addEventListener("click", (event) => {
    const assignmentElement = event.target.closest(".assignment");
    if (assignmentElement) {
        const index = Array.from(assignmentElement.parentNode.children).indexOf(assignmentElement);
        const assignment = assignments[index];
        displayAssignmentOverlay(assignment);
    }
});

// Display initial assignments
displayAssignments();

// Rest of your event listeners and functions

// Your existing JavaScript code

// Function to handle sign out
function handleSignOut() {
    // Add your sign out logic here
}

// Add event listener for sign out link
const signOutLink = document.querySelector(".dropdown-content a");
signOutLink.addEventListener("click", handleSignOut);


// Initialize Particle.js animation hHrhshshd
particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        // Add more particle configuration options here
    }
});
