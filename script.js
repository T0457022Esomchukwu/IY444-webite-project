    /*(ChatGpt,2025)*/
    function search() {
        let filter = document.querySelector('.search-input').value.toUpperCase(); // This is to get input values
        let items = document.querySelectorAll('.dish'); // This is to get all dishes
        
        items.forEach(item => {
            let nameElement = item.querySelector('.name'); // This is to get the dish name
            if (nameElement) {
                let value = nameElement.textContent.toUpperCase();
                if (value.indexOf(filter) > -1) {
                    item.style.display = ""; // This is to show matching items
                } else {
                    item.style.display = "none"; // This is to hid non matching items
                }
            }
        });
    }
    
   
    document.querySelector('.search-input').addEventListener('input', search);

  

    