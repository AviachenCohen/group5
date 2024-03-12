// Action-buttons
// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.value;
    let screenName;
    // Determine the screen to navigate to based on the button value
    switch (buttonValue) {
        case "Log in":
            screenName = "/login";
            break;
        case "Sign up":
            screenName = "/signup";
            break;
        case "Log out":
            screenName = "/";
            break;
        case "Save Changes":
            screenName = "/account";
            break;
        default:
            console.log("Invalid button value:", buttonValue);
            return; // Exit function if button value is invalid
    }

    window.location.href = screenName;
}

// Attach event listener to all action buttons
const buttons = document.querySelectorAll(".action-button");
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
