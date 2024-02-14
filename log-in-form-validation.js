// Log in form validation
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const email = document.querySelector('input[name="emailInput"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return; // Stop form submission if validation fails
        }

        // Validate password format
        if (!validatePassword(password)) {
            alert("Password is required.");
            return;
        }
        // If all validations pass, submit the form
        alert("Form submitted successfully!"); //test - delete this later
        window.location.href = "My Skin Care Screen.html";
    }

    // Attach event listener to form submission
    const signUpForm = document.querySelector('form');
    signUpForm.addEventListener("submit", handleFormSubmit);

    // Function to validate password format
    function validatePassword(password) {
        // Later(part c) - here will check if password is correct
        return password.trim() !== "";
    }

});

