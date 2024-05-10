document.addEventListener('DOMContentLoaded', function () {
    const modulesList = document.querySelector('#modules ul');
    const moduleContent = document.querySelector('#moduleContent');
    const progress = document.querySelector('#progress');

    // Mock data for modules
    const modulesData = {
        1: "Welcome to the course! In this module, you'll get an overview of programming.",
        2: "Learn about variables, data types, and how to store information in your programs.",
        3: "Explore control flow statements like if statements and loops to control program execution.",
        4: "Understand the concept of functions and how to use them in your code."
    };

    // Initialize progress
    let completedModules = 0;
    const totalModules = Object.keys(modulesData).length;

    updateProgress();

    // Populate modules list
    for (const moduleId in modulesData) {
        const moduleItem = document.createElement('li');
        moduleItem.textContent = modulesData[moduleId].substring(0, 30) + '...';
        moduleItem.setAttribute('data-id', moduleId);
        moduleItem.addEventListener('click', loadModule);
        modulesList.appendChild(moduleItem);
    }

    // Function to load module content
    function loadModule(event) {
        const moduleId = event.target.getAttribute('data-id');
        moduleContent.textContent = modulesData[moduleId];
        markModuleAsCompleted(moduleId);
    }

    // Function to mark module as completed
    function markModuleAsCompleted(moduleId) {
        const completedModule = document.querySelector(`#modules li[data-id="${moduleId}"]`);
        completedModule.style.textDecoration = 'line-through';
        completedModules++;
        updateProgress();
    }

    // Function to update progress
    function updateProgress() {
        const percentage = (completedModules / totalModules) * 100;
        progress.textContent = `Progress: ${percentage.toFixed(2)}%`;
    }
});
