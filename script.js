// Add event listener for the full screen button
const fullscreenButton = document.getElementById("fullscreen-button");

fullscreenButton.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});

// Add this function to fetch assignments
async function fetchAssignments() {
    const sectionId = '17-06'; // Replace with the actual section ID

    try {
        const response = await fetch(`https://api.schoology.com/v1/sections/${7-06}/assignments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ba7da6c282e0c4664e7f5235d58b8e50061ef0aed', // Replace with your Schoology API key
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data.assignments || [];
        } else {
            console.error('Failed to fetch assignments:', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Error fetching assignments:', error.message);
        return [];
    }
}

// Replace the sample assignments with the fetched data
async function displayAssignments() {
    assignmentBox.innerHTML = '';

    const assignments = await fetchAssignments();

    assignments.forEach((assignment) => {
        assignmentBox.innerHTML += `
            <div class="assignment">
                <h3>${title}</h3>
                <p>Description: ${description}</p>
                <p>Due: ${due}</p>
            </div>
        `;
    });
}

// Add the section ID in fetchAssignments function
async function displayAssignmentOverlay(assignment) {
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
        <h2>${title}</h2>
        <p>Description: ${description}</p>
        <p>Due: ${due}</p>
    `;

    detailsBox.appendChild(closeButton);
    overlay.appendChild(detailsBox);
    document.body.appendChild(overlay);
}

// Event listener for assignment boxes
assignmentBox.addEventListener("click", async (event) => {
    const assignmentElement = event.target.closest(".assignment");
    if (assignmentElement) {
        const index = Array.from(assignmentElement.parentNode.children).indexOf(assignmentElement);
        const assignments = await fetchAssignments();
        const assignment = assignments[index];
        displayAssignmentOverlay(assignment);
    }
});

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
        <h2>${title}</h2>
        <p>Description: ${description}</p>
        <p>Due: ${due}</p>
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

// Add event listeners to handle tab clicks
const homeTab = document.getElementById("home-tab");
const coursesTab = document.getElementById("courses-tab");
const musicTab = document.getElementById("music-tab");
const settingsTab = document.getElementById("settings-tab");

homeTab.addEventListener("click", () => {
    // Handle home tab click
});

coursesTab.addEventListener("click", () => {
    // Handle courses tab click
});

musicTab.addEventListener("click", () => {
    // Handle music tab click
});

settingsTab.addEventListener("click", () => {
    // Handle settings tab click
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

// Add this code at the end of your script.js file

// Trigger the fade-in animation on page load
window.addEventListener("load", () => {
    const revealAnimation = document.querySelector(".reveal-animation");
    if (revealAnimation) {
        revealAnimation.style.animationPlayState = "running";
    }
});