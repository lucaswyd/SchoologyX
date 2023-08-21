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

// Rest of your event listeners and functions

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
