// Action-buttons
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle button clicks
    function handleButtonClick(event) {
        const buttonValue = event.target.value;
        let screenName;
        // Determine the screen to navigate to based on the button value
        switch (buttonValue) {
            case "Log in":
                screenName = "Log%20In%20Screen.html";
                break;
            case "Sign up":
                screenName = "Sign%20Up%20Screen.html";
                break;
            case "Log out":
                screenName = "Home%20Screen.html";
                break;
            case "Save Changes":
                screenName = "Account%20Screen.html";
                break;
            default:
                console.log("Invalid button value:", buttonValue);
                return; // Exit function if button value is invalid
        }

        window.location.href = `http://localhost:63342/group5/${screenName}`;
    }

    // Attach event listener to all action buttons
    const buttons = document.querySelectorAll(".action-button");
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });
});

