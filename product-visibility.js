/*
// JavaScript to toggle accordion - pressing on header will display content
document.addEventListener("DOMContentLoaded", function() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
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
});
 */


/*
document.addEventListener("DOMContentLoaded", function() {
    // Hide the pro-category-con container initially
    const proCategoryCon = document.getElementById("pro-category-con");
    proCategoryCon.style.display = "none";

    // Get all product photos
    const productPhotos = document.querySelectorAll(".product-photo");

    // Add click event listener to each product photo
    productPhotos.forEach(photo => {
        photo.addEventListener("click", function() {
            // Show the pro-category-con container when a product photo is clicked
            proCategoryCon.style.display = "block";

            // Toggle visibility of clicked product photo
            this.classList.toggle("hide");
            // Get the category of the clicked product photo
            const category = this.getAttribute("data-category");
            // Get all product photos with the same category
            const sameCategoryPhotos = document.querySelectorAll(`.product-photo[data-category="${category}"]`);
            // Toggle visibility of other product photos with the same category
            sameCategoryPhotos.forEach(item => {
                if (item !== this) {
                    item.classList.toggle("hide");
                }
            });
        });
    });

    // Add click event listener to each accordion header
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle visibility of the accordion content when header is clicked
            this.nextElementSibling.classList.toggle("hide");
        });
    });
});
*/

//DELETE ALL ABOVE BEFORE SUBMITTING

document.addEventListener('DOMContentLoaded', function () {
    // Get all product photos
    const productPhotos = document.querySelectorAll('.product-photo');

    // Get the category container
    const categoryContainer = document.getElementById('pro-category-con');

    // Initialize the active category
    let activeCategory = '';

    // Hide the category container initially
    categoryContainer.style.display = 'none';

    // Add click event listener to each product photo
    productPhotos.forEach(function (photo) {
        photo.addEventListener('click', function () {
            // Get the data-category attribute value
            const category = this.getAttribute('id');

            // Show the category container
            categoryContainer.style.display = 'block';

            // Hide all category containers except for the one corresponding to the clicked photo
            const allCategoryContainers = document.querySelectorAll('.product-photo[data-category]');
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

    // Prevent the category container from hiding when clicking inside it
    categoryContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Prevent accordion items from hiding when clicking inside them
    categoryContainer.querySelectorAll('.accordion-item').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});
