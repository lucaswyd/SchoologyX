const key = "ba7da6c282e0c4664e7f5235d58b8e50061ef0aed";
const secret = "f2db16faed67dbf6c19db9bcbbdceeda";

const request_authorization = $py2js(function() {
    const auth = schoolopy.Auth(key, secret, three_legged=True, domain='https://roundrockisd.schoology.com');
    return auth.request_authorization();
});

const get_section_events = $py2js(function(section_id) {
    const sc = schoolopy.Schoology(auth);
    return sc.get_section_events(section_id=section_id);
});

function startAuthorization() {
    request_authorization().then(function(url) {
        // Handle and display the authorization URL (e.g., redirect user)
        console.log('Authorization URL:', url);
    });
}

function authorizeAndFetchEvents() {
    if (!auth.authorize()) {
        console.error('User not authorized!');
        return;
    }

    get_section_events(6803451612).then(function(data) {
        // Process and display the retrieved assignment data
        console.log('Section events:', data);
    });
}

// Call functions based on your application logic
startAuthorization();
//authorizeAndFetchEvents();



const assignmentBox = document.querySelector(".assignment-box");

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

// Add this function to fetch assignments from the Schoology API
async function fetchAssignments() {
    const apiKey = 'ba7da6c282e0c4664e7f5235d58b8e50061ef0aed'; // Replace with your Schoology API key
    const sectionId = '1-01'; // Replace with the actual section ID

    try {
        const response = await fetch(`https://api.schoology.com/v1/sections/${sectionId}/assignments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
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
                <h3>${assignment.title}</h3>
                <p>Description: ${assignment.description}</p>
                <p>Due: ${assignment.due}</p>
            </div>
        `;
    });
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

// Get a reference to the slider buttons
const leftButton = document.querySelector(".slider-button-left");
const rightButton = document.querySelector(".slider-button-right");

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
        <h2>${assignment.title}</h2>
        <p>Description: ${assignment.description}</p>
        <p>Due: ${assignment.due}</p>
    `;

    detailsBox.appendChild(closeButton);
    overlay.appendChild(detailsBox);
    document.body.appendChild(overlay);
}

// Display initial assignments
displayAssignments();

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
