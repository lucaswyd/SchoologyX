});

// Event listener for the left button
leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + assignments.length) % assignments.length;
    displayAssignment(currentIndex);
});

// Initial display
displayAssignment(currentIndex);
