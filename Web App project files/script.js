
// JavaScript for navigation
document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('#login-link');
    const registerLink = document.querySelector('#register-link');
    const loginPage = document.querySelector('#login-page');
    const registerPage = document.querySelector('#register-page');

    // Show the login page when the login link is clicked
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginPage.style.display = 'block';
        registerPage.style.display = 'none';
    });

    // Show the registration page when the register link is clicked
    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginPage.style.display = 'none';
        registerPage.style.display = 'block';
    });
});



