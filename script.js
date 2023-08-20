// Sample assignment data
const assignments = [
    { name: "Math Assignment", dueDate: "August 15" },
    { name: "Science Assignment", dueDate: "August 17" },
    { name: "Spanish Assignment", dueDate: "August 19" },
    { name: "English Assignment", dueDate: "August 20" },
    { name: "History Assignment", dueDate: "August 21" },
    { name: "Art Assignment", dueDate: "August 22" },
    { name: "Cooking Assignment", dueDate: "August 23" },
    { name: "Research Assignment", dueDate: "August 24" },
    // Add more assignments here
];

// Get a reference to the assignment box and the slider buttons
const assignmentBox = document.querySelector(".assignment-box");
const leftButton = document.querySelector(".slider-button-left");
const rightButton = document.querySelector(".slider-button-right");
const seeMoreButton = document.querySelector(".see-more-button"); // Add reference to the "See All" button

let currentIndex = 0;

// Function to display all assignments
function displayAssignments() {
    console.log("Displaying assignments"); // Debug log

    assignmentBox.innerHTML = ''; // Clear existing assignments

    assignments.forEach((assignment) => {
        console.log("Adding assignment:", assignment.name); // Debug log
        assignmentBox.innerHTML += `
            <div class="assignment">
                <h3>${assignment.name}</h3>
                <p>Due: ${assignment.dueDate}</p>
            </div>
        `;
    });
}

// Greetings based on time of day
const currentHour = new Date().getHours();
let greeting = "";
if (currentHour >= 0 && currentHour < 7) {
    greeting = "Rise and Shine";
} else if (currentHour >= 7 && currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

// Display the greeting
document.getElementById("greeting").textContent = `${greeting}, Lucas!`;

// Event listener for the right button
rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % assignments.length;
    displayAssignments();
});

// Event listener for the left button
leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + assignments.length) % assignments.length;
    displayAssignments();
});

// Initial display
displayAssignments();

// Event listener for the "See All" button
seeMoreButton.addEventListener("click", () => {
    assignmentBox.style.flexWrap = "wrap"; // Adjust flex-wrap property to wrap assignments
});

// Function to display assignment details overlay
function displayAssignmentOverlay(assignment) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const assignmentDetails = document.createElement("div");
    assignmentDetails.classList.add("assignment-details");

    assignmentDetails.innerHTML = `
        <h3>${assignment.name}</h3>
        <p>Due: ${assignment.dueDate}</p>
    `;

    overlay.appendChild(assignmentDetails);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });
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

// Initialize Particle.js animation
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

// Rest of your existing script.js content
