// Add this at the beginning of your script.js file
window.addEventListener("load", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.remove();
    }, 1000); // Remove the overlay after the animation duration
});

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

let currentIndex = 0;

// Function to display the current assignment
function displayAssignment(index) {
    const assignment = assignments[index];
    if (assignment) {
        assignmentBox.innerHTML = `
            <div class="assignment">
                <h3>${assignment.name}</h3>
                <p>Due: ${assignment.dueDate}</p>
            </div>
        `;
    }
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
    displayAssignment(currentIndex);
});

// Event listener for the left button
leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + assignments.length) % assignments.length;
    displayAssignment(currentIndex);
});

// Initial display
displayAssignment(currentIndex);
