
// Add this JavaScript code to update progress dynamically

// Assuming you have a variable to store the total number of modules
const totalModules = /* Set your total number of modules here */5;

// Sample variable to store completed modules (you can update this dynamically)
let completedModules = 0;

// Function to update progress bar and text
function updateProgress() {
    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressText');
    const completedModulesSpan = document.getElementById('completedModules');
    const totalModulesSpan = document.getElementById('totalModules');

    const progressPercentage = (completedModules / totalModules) * 100;

    progressBarFill.style.width = `${progressPercentage}%`;
    completedModulesSpan.textContent = completedModules;
    totalModulesSpan.textContent = totalModules;

    progressText.textContent = `You have completed ${completedModules} out of ${totalModules} modules.`;
}

// Call this function whenever a module is completed
function moduleCompleted() {
    completedModules++; // Increment completed modules
    updateProgress(); // Update progress bar and text
}

// Assuming you have a variable to store the number of earned certificates
const earnedCertificates = /* Set your initial number of certificates here */5;

// Function to update certificate count
function updateCertificates() {
    const earnedCertificatesSpan = document.getElementById('earnedCertificates');
    earnedCertificatesSpan.textContent = earnedCertificates;
}

// Call this function whenever a certificate is earned
function certificateEarned() {
    earnedCertificates++; // Increment earned certificates
    updateCertificates(); // Update certificate count
}

// Initial update on page load
updateProgress();
updateCertificates();
