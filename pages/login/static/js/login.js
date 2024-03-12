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

        // If all validations pass, submit the form
        // Send the form data to the server for further validation and processing
        loginUser(email, password);
    }

    // Attach event listener to form submission
    const loginForm = document.querySelector('form');
    loginForm.addEventListener("submit", handleFormSubmit);

    // Function to send login data to the server
    function loginUser(email, password) {
        // Send an AJAX request to the server to validate the login credentials
        // and perform the login process
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailInput: email,
                password: password
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // If the login was successful, redirect to the dashboard or home page
                    window.location.href = "/myskincare";
                } else {
                    // If the login failed, display an alert with the error message
                    alert(data.error);
                }
            })
            .catch(error => {
                // If an error occurs during the fetch request, display an error message
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            });
    }
});
