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
const seeAllButton = document.querySelector(".see-all-button");

// Function to display the current assignment
function displayAssignments() {
    assignmentBox.innerHTML = assignments
        .map(
            assignment => `
                <div class="assignment">
                    <h3>${assignment.name}</h3>
                    <p>Due: ${assignment.dueDate}</p>
                </div>
            `
        )
        .join("");
}

// Event listener for the "See All" button
seeAllButton.addEventListener("click", () => {
    assignmentBox.classList.toggle("expanded");
});

// Initial display
displayAssignments();
