  





//(Shields,2011)
var url = window.location.pathname.split("/"); 
var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

var i=0;
var currentPage = url[url.length - 1];
for(i;i<navLinks.length;i++){
    var lb = navLinks[i].href.split("/");
    if(lb[lb.length-1] == currentPage) {
    navLinks[i].className = "current";

    }
    }


    //(Greatstack,2022)
var emailField=document.getElementById("email-field");
var emailError=document.getElementById("email-error"); 
function validateEmail(){

    if (!emailField.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML="Please enter a valid email";
        return false;

    }
    emailError.innerHTML="";    
    return true;          
    
}
//(The Wheelchair Guy,2021)
function runTime(){
    var getDate = new Date();//This is to get the date
    var Change = getDate.toLocaleTimeString();//This is to change the date into a string
    var post = document.querySelector('.time').innerHTML=Change;//Displays Change variable into time div
    
}
setInterval(runTime,0);

//(LearnDesign,2021)
function scrollToTop(){
    window.scrollTo(0,0);
}


    //(ChatGpt,2025)
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

    