document.addEventListener('DOMContentLoaded', function () {

    // Get the category container
    const categoryContainer = document.getElementById('pro-category-con');
    // Hide the category container initially
    categoryContainer.style.display = 'none';

    // Initialize the active category
    let activeCategory = '';

    // Get all product photos
    const productPhotos = document.querySelectorAll('.product-photo');

    // Add click event listener to each product photo
    productPhotos.forEach(function (photo) {
        photo.addEventListener('click', function () {
            // Get the data-category attribute value
            const category = this.getAttribute('id');

            // Show the category container
            categoryContainer.style.display = 'block';

            // Hide all category containers except for the one corresponding to the clicked photo
            const allCategoryContainers = document.querySelectorAll('.pro-cat[data-category]');
            allCategoryContainers.forEach(function (container) {
                if (container.getAttribute('data-category') === category) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            });

            // Update the active category
            activeCategory = category;
        });
    });

    // Add click event listener to accordion headers to toggle accordion content
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            // Toggle active class on accordion item
            this.parentElement.classList.toggle("active");

            // Toggle display of accordion content
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // // Prevent the category container from hiding when clicking inside it
    // categoryContainer.addEventListener('click', function (event) {
    //     event.stopPropagation();
    // });

    // // Prevent accordion items from hiding when clicking inside them
    // categoryContainer.querySelectorAll('.accordion-item').forEach(function (item) {
    //     item.addEventListener('click', function (event) {
    //         event.stopPropagation();
    //     });
    // });
});
