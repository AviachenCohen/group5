// Sign up form validation
document.addEventListener("DOMContentLoaded", function () {
    // Hide the medication name dropdown when the page loads
    document.getElementById("topical-medication-dropdown").style.display = "none";

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const email = document.querySelector('input[name="emailInput"]').value;
        const phoneNumber = document.querySelector('input[name="phoneInput"]').value;
        const firstName = document.querySelector('input[name="firstNameInput"]').value;
        const lastName = document.querySelector('input[name="LastNameInput"]').value;
        const birthDate = document.querySelector('input[name="BirthDateInput"]').value;
        const skinType = document.querySelector('select[name="SkinType"]').value;
        const topicalMedication = document.querySelector('select[name="topical-medication"]').value;
        const medicationName = document.querySelector('select[name="medication-name"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return; // Stop form submission if validation fails
        }

        // Validate phone number format using regular expression
        const phoneRegex = /^05\d-\d{7}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert("Please enter a valid phone number in the format 05x-xxx-xxxx.");
            return; // Exit the function if phone number format is invalid
        }

        // Validate First Name and Last Name
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(firstName)) {
            alert("Please enter a valid First Name with only alphabetic characters and spaces.");
            return; // Exit the function if First Name format is invalid
        }
        if (!nameRegex.test(lastName)) {
            alert("Please enter a valid Last Name with only alphabetic characters and spaces.");
            return; // Exit the function if Last Name format is invalid
        }

        // Validate user is not underage
        // Calculate the user's age
        const dob = new Date(birthDate);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dob.getFullYear();

        // Check if the user is at least 18 years old
        if (age < 18) {
            alert("You must be at least 18 years old to sign up.");
            return;
        }

        // Validate medication selection if user is taking topical medications
        if (topicalMedication === 'Yes' && medicationName === '') {
            alert("Please select a medication name.");
            return;
        }

        // Validate password format
        if (!validatePassword(password)) {
            alert("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit");
            return;
        }

        // Confirm password match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        window.location.href = "Account Screen.html";
    }

    // Attach event listener to form submission
    const signUpForm = document.querySelector('form');
    signUpForm.addEventListener("submit", handleFormSubmit);

    // Function to validate password format
    function validatePassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        return passwordRegex.test(password);
    }
});


// Function to show/hide medication dropdown based on selection
function showTopicalMedicationDropdown() {
    const select = document.querySelector('select[name="topical-medication"]');
    const dropdown = document.getElementById('topical-medication-dropdown');
    if (select.value === 'yes') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}