

//Attention - this code isn't running 100% yet!
// Here in the meantime for display history purpose, cuz still don't have connection to database

document.addEventListener("DOMContentLoaded", function() {
    const searchHistoryList = document.getElementById("search-history-list");
    const emptySearchMessage = document.getElementById("empty-search-message");

    // Assuming searchHistory is an array of search history items
    const searchHistory = []; // Replace this with your actual search history data

    // Function to display search history
    function displaySearchHistory() {
        // Clear previous content
        searchHistoryList.innerHTML = "";

        // Check if search history is empty
        if (searchHistory.length === 0) {
            emptySearchMessage.style.display = "block"; // Show empty search message
        } else {
            emptySearchMessage.style.display = "none"; // Hide empty search message
            // Display each search history item
            searchHistory.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                searchHistoryList.appendChild(li);
            });
        }
    }

    // Call the function to display search history
    displaySearchHistory();
});





