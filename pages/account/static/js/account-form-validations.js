// Account form validation
document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    // Function to check if passwords match
    function passwordsMatch() {
        return passwordInput.value === confirmPasswordInput.value;
    }

    // Function to handle form submission
    function handleFormSubmission(event) {
        if (!validatePassword(passwordInput.value)) {
            alert("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.");
            event.preventDefault(); // Prevent form submission
        } else if (!passwordsMatch()) {
            alert("Passwords do not match.");
            event.preventDefault(); // Prevent form submission
        } else { // If all validations pass, submit the form
            alert("Form submitted successfully!");
            window.location.href = "account.html";
        }
    }

    // Add event listener to form submit event
    const form = document.querySelector(".update-info");
    form.addEventListener("submit", handleFormSubmission);

    // Function to validate password complexity
    function validatePassword(password) {
        // Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    }
});
