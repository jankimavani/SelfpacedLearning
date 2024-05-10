// Sample JSON data for courses (replace this with your actual data)
const courseData = {
    "health": [
        { name: "Course 1", description: "Description of Course 1." },
        { name: "Course 2", description: "Description of Course 2." },
        // Add more course objects as needed
    ],
    "computer-science": [
        { name: "Course 3", description: "Description of Course 3." },
        { name: "Course 4", description: "Description of Course 4." },
        // Add more course objects as needed
    ],
    "bio-tech": [
        { name: "Course 5", description: "Description of Course 5." },
        { name: "Course 6", description: "Description of Course 6." },
        // Add more course objects as needed
    ],
    // Add more fields as needed
};

// Function to load courses based on the selected field
function loadCoursesForField(field) {
    const courseContainer = document.getElementById("courseContainer");
    courseContainer.innerHTML = ""; // Clear previous content

    const courses = courseData[field];

    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.className = "course";
        
        const courseHeading = document.createElement("h2");
        courseHeading.textContent = course.name;

        const courseDescription = document.createElement("p");
        courseDescription.textContent = course.description;

        courseElement.appendChild(courseHeading);
        courseElement.appendChild(courseDescription);

        courseContainer.appendChild(courseElement);
    });
}

// Function to search courses
function searchCourses() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    // Implement search logic based on your requirements
    // You can filter courses based on the search term
}
