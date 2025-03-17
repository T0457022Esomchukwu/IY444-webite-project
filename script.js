    /*(ChatGpt,2025)*/
    function search() {
        let filter = document.querySelector('.search-input').value.toUpperCase(); // Get input value
        let items = document.querySelectorAll('.dish'); // Get all dish elements
        
        items.forEach(item => {
            let nameElement = item.querySelector('.name'); // Get the dish name element
            if (nameElement) {
                let value = nameElement.textContent.toUpperCase();
                if (value.indexOf(filter) > -1) {
                    item.style.display = ""; // Show matching items
                } else {
                    item.style.display = "none"; // Hide non-matching items
                }
            }
        });
    }
    
    // Add event listener to the search input
    document.querySelector('.search-input').addEventListener('input', search);