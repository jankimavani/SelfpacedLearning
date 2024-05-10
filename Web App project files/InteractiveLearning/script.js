document.addEventListener('DOMContentLoaded', function () {
    const modulesList = document.querySelector('#modules ul');
    const moduleContent = document.querySelector('#moduleContent');
    const progress = document.querySelector('#progress');
    const quizForm = document.querySelector('#quizForm');
    const quizResult = document.querySelector('#quizResult');
    const assignmentSubmission = document.querySelector('#assignmentSubmission');
    const assignmentResult = document.querySelector('#assignmentResult');

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

        // If all modules are completed, show the interactive learning section
        if (completedModules === totalModules) {
            document.getElementById('interactive').style.display = 'block';
        }
    }

    // Quiz submission
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const answers = {
            q1: document.getElementById('q1').value.trim().toLowerCase(),
            q2: document.getElementById('q2').value.trim().toLowerCase()
        };

        // Mock correct answers
        const correctAnswers = {
            q1: 'variable is a container for storing data values.',
            q2: 'a loop is a sequence of instruction s that is continually repeated until a certain condition is reached.'
        };

        let correctCount = 0;

        for (const questionId in answers) {
            const userAnswer = answers[questionId];
            const correctAnswer = correctAnswers[questionId];

            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        }

        const score = (correctCount / Object.keys(answers).length) * 100;
        quizResult.textContent = `Quiz Result: ${score.toFixed(2)}%`;
    });

    // Assignment submission
    window.submitAssignment = function () {
        const submission = assignmentSubmission.value.trim();

        // Mock assignment evaluation (simple check for the word "sum")
        const isAssignmentCorrect = submission.toLowerCase().includes('sum');

        if (isAssignmentCorrect) {
            assignmentResult.textContent = 'Assignment Submitted Successfully. Well done!';
        } else {
            assignmentResult.textContent = 'Assignment Incorrect. Please review and try again.';
        }
    };
});
