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

// Get a reference to the assignment container and the "See All" button
const assignmentContainer = document.querySelector(".assignment-container");
const seeAllButton = document.querySelector(".see-all-button");

// Rest of your existing code

// Hide overlay and show content
function hideOverlay() {
    const overlay = document.querySelector(".overlay");
    overlay.style.animation = "fadeOut 1s ease-in-out";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 1000);
}

// Display assignments and hide overlay
function displayAssignments() {
    displayAssignment(currentIndex);
    hideOverlay(); // Hide overlay after assignments are displayed
}

// Initial display
displayAssignments();
