// Search-bar validation in my skin care screen validation
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleSearchFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get search input value
        const searchInput = document.getElementById('search-input').value;

        // Validate search input
        if (searchInput === '') {
            alert("Please enter a product name.");
            event.preventDefault(); // Prevent form submission
        } else {
            window.location.href = "My Skin Care Screen.html"; //NOTICE - after implementing database, when the user uses searchbar - it will lead him to the product searched for
        }
    }
    // Attach event listener to form submission
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener("submit", handleSearchFormSubmit);
});
