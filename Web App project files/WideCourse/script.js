// Sample JSON data for fields (replace this with your actual data)
const fieldData = [
    { name: "Health Field", img: "health-icon.png", link: "health", description: "Explore courses related to health and wellness." },
    { name: "Computer Science", img: "cs-icon.png", link: "computer-science", description: "Discover courses in computer science and programming." },
    { name: "Bio Tech", img: "bio-tech-icon.png", link: "bio-tech", description: "Learn about the latest advancements in biotechnology." },
    // Add more field objects as needed
];

// Function to generate field sections
function generateFieldSections(fields) {
    const container = document.getElementById("fieldContainer");

    fields.forEach(field => {
        const feature = document.createElement("div");
        feature.className = "feature";

        const link = document.createElement("a");
        link.href = `courses.html#${field.link}`;

        const img = document.createElement("img");
        img.src = field.img;
        img.alt = field.name + " Icon";

        const heading = document.createElement("h2");
        heading.textContent = field.name;

        link.appendChild(img);
        link.appendChild(heading);

        const description = document.createElement("p");
        description.textContent = field.description;

        feature.appendChild(link);
        feature.appendChild(description);

        container.appendChild(feature);
    });
}

// Initial load of fields
generateFieldSections(fieldData);

// Function to load more fields (replace this with your actual logic)
function loadMoreFields() {
    // Fetch more data from your database or provide more sample data
    const moreFieldData = [
        { name: "Field 4", img: "field4-icon.png", link: "field4", description: "Description of Field 4." },
        { name: "Field 5", img: "field5-icon.png", link: "field5", description: "Description of Field 5." },
        { name: "Field 6", img: "field6-icon.png", link: "field6", description: "Description of Field 6." },
    ];

    // Generate sections for the new data
    generateFieldSections(moreFieldData);
}

// Function to search fields
function searchFields() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredFields = fieldData.filter(field => field.name.toLowerCase().includes(searchTerm));
    document.getElementById("fieldContainer").innerHTML = "";
    generateFieldSections(filteredFields);
}
