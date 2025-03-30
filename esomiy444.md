
Table
Test table :
Test table is inTesttable.txt


Report 18/02/2025 (V1.2)
1.Changed the whole website layout because it was not visually appealing.
3.Added a new dish to the website.
4.Added Breadcrumbs navigation(Partially completed).
5.Customized the scrollbar.
2.Partially finished the homepage.
3.Partially finished the fried rice page.

Report 21/02/2025 (V1.3)
1.Each pages content fits the background.
2.Contact page completed.
3.The use of Web3forms to recieve completed forms.
4.Changed the whole color scheme of the website to create contrast between colours.
4.Parially completed the about page.
5.Partially completed the shawarma ,egg sauce and pancake page.

Report 11/03/2025 (V1.4)
1.Accordions have been implemented to each pages steps
2.Search bar has functionality

Report 17/03/2025(V1.5)
1.Videos added

Report 18/03/2025(V1.6)
1.Email validation added to the contact page
2.Google form added for quizzes
3.Breadcrumbs deleted

Report 21/03/2025(V1.7)
1.Added header and main tags to all pages
2.Made the homepage responsive

Report 22/03/2025 (V1.8)
1.Parially made all food pages responsive
2About and contact page are responsive

Report 22/03/2025(V1.9)
1.All pages are responsive

Report 24/03/2025 (V2.0)
1.Added audio only content to each food page

Report 27/03/2025(V2.1)
1.Made some few changes

Report 28/03/2025(v2.2)
1.Javascript for the current navigation tab and current time added
References for the code:

Report 29/03/2025 (V2.3)
1.Test table has been added

Report 29/03/2025 (V2.4)
1.Back to the top button has been added

Report 30/03/2025 (V2.5)
1.Footer added to each page

Bro Code (2023, September 21). How to create a CSS navigation bar in 6 minutes! 🧭
. [YouTube video]. Retrieved from: [https://youtu.be/f3uCSh6LIY0](https://youtu.be/f3uCSh6LIY0)  [Accessed 16 February 2025].

Tahmid Ahmed. (2021, May 7). Animated Gradient Background
with Pure CSS, HTML & CSS Tutorials. [YouTube video]. Retrieved
from: [https://youtu.be/LqRfQVcn3FY](https://youtu.be/LqRfQVcn3FY)
  [Accessed 15 February 2025].
decode. (2023, October 3). Creating a Stylish Search Bar for Your
Website, HTML & CSS Tutorial. [YouTube video]. Retrieved from:  [https://youtu.be/f6ocDCkCmhM?list=LL](https://youtu.be/f6ocDCkCmhM?list=LL)  [Accessed 15 February 2025].

Google. (n.d). Search [Icon]. Retrieved from: [https://fonts.google.com/icons?selected=Material+Symbols+Outlined:search:FILL@0;wght@400;GRAD@0;opsz@24&amp;icon.size=24&amp;icon.color=%235f6368&amp;icon.platform=web](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:search:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%235f6368&icon.platform=web)  [Accessed 15 February 2025].
Web Dev Simplified. (2021, August 28). How To Create Custom Scrollbar In CSS. [YouTube video]. Retrieved from: [https://youtu.be/v_8CmC6cwUs](https://youtu.be/v_8CmC6cwUs)  [Accessed 17 February 2025].

GreatStack. (2023, December 28). Create Working Contact Form Using HTML & CSS. [YouTube video]. Retrieved from: [https://youtu.be/-HeadgoqJ7A](https://youtu.be/-HeadgoqJ7A)  [Accessed 20 February 2025].

Web3Forms. (n.d.). Contact Forms for Modern Websites. Retrieved from:   [https://web3forms.com/](https://web3forms.com/)   [Accessed 20 February 2025].

GreatStack.(2022,October 18). How To Make An Accordion
Using HTML And CSS | Collapsible Content On Website.  [YouTube video].
Retrieved from:  [https://youtu.be/fSkhTd4rpDo?list=LL](https://youtu.be/fSkhTd4rpDo?list=LL)  [Accessed 11 March 2025].


ChatGPT. (2025).Functionality for the search bar to search for dishes in the website[Unpublished software script].OpenAI.
Prompt:

```
<meta charset="UTF-8" />
<title>Nigerian Eats by Esom</title>
<link rel="stylesheet" href="homepage.css">


<!--This for the search Image gotten from google-->

<!-- (Google,n.d)-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search" />
```

```
    <li><a href = "HomePage.html"> Home</a></li>
    <li><a href = "About.html"> About</a></li>
    <li><a href = "Contact.html"> Contact Us</a></li>
</ul></nav> 

<div class="header" >
    <header>
    <h1>NIGERIAN EATS BY ESOM</h1>
    </header>
    </div>

    <div class="intro">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non velit eius odit saepe autem repudiandae cupiditate, cum, aliquam eaque incidunt ipsum fugiat voluptas eum fuga earum aliquid qui voluptatum illo! COME BACK AND CHANGE THIS!!!!
  
    </p>  
    </div>

 <!--(decode,2023)-->
<form>
    <div class="search"><!--This is the search bar-->
        <span class=" search-icon material-symbols-outlined">search</span>
        <input class ="search-input" type="search" placeholder="Search">
    </div>


</form>

<!--(Web Dev With Ron,2023)-->
<ul class="breadcrumb">    <!--This is the breadcrum navigation-->
    <li><a href ="HomePage.html">Home</a></li>
    <li><a href ="">About</a></li>
    <li><a href ="">Contact</a></li>
  
</ul>






<div class="dishes"><!--This is where all the dishes are displayed-->
    <div class="dish"><a href="FriedRice.html">
        <img src="Images\Image (15).jpeg" alt ="Nigerian Fried Rice" width ="215" px height="150">
        <p class="name">Nigerian Fried Rice</p>
    </a>
     
    </div>
        <div class="dish"><a href="Pancake.html">
            <img src="Images\Image (16).jpeg" alt ="Pancake and Corned beef sauce" width ="215"  height ="150">
            <p class="name">Pancake & Corned beef sauce</p>
        </a>
        </div>
      
        <div class="dish"><a href="Eggsauce.html">
            <img src="Images\Image (17).jpeg" alt="Egg Sauce" width ="215" height="150" >
            <p class="name">Nigerian Egg sauce</p>
        </a>
         
        </div>

        <div class="dish"><a href="Shawarma.html">
            <img src="Images\Image.jpg" alt="Chicken Shawarma" width ="215" height="150" >
            <p class="name">Chicken Shawarma</p>
        </a>
        </div>
    </div>
```

<script type="text/javascript">
    function search() {
        let filter = document.querySelector('.search-input').value.toUpperCase(); // Corrected input retrieval
        let items = document.querySelectorAll('.dish'); // Get all dish elements
```
    items.forEach(item => {
        let nameElement = item.querySelector('.name p'); // Corrected name retrieval
        if (nameElement) {
            let value = nameElement.textContent.toUpperCase();
            if (value.indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
}

// Add event listener to the search input
document.querySelector('.search-input').addEventListener('input', search);

</script>

please make my search bar work,This is from youtube.

GreatStack. (2022, September 2) How To Make Email
Validation Using JavaScript | Valid & Invalid Email Check In
JavaScript [YouTube video]. Retrieved from: [https://youtu.be/ndNPg8-5jgI](https://youtu.be/ndNPg8-5jgI)  [Accessed 18 March 2025].

Shields,T. (2011). Using Javascript to highlight current page in navbar. Retrieved from: [https://stackoverflow.com/questions/6964503/using-javascript-to-highlight-current-page-in-navbar?newreg=8d64d8cb87184e7ebd56346c9d675b18](https://stackoverflow.com/questions/6964503/using-javascript-to-highlight-current-page-in-navbar?newreg=8d64d8cb87184e7ebd56346c9d675b18) [Accessed 28 March 2025].

The Wheelchair Guy. (2021, April 2021).  How to Add a JavaScript Time to your web page. [YouTube video]. Retrieved from: https://youtu.be/tf4E9CUuMH0?list=LL  [Accessed 28 March 2025].

Google. (n.d). Nigerian Fried Rice. Retrieved from: [https://docs.google.com/forms/d/1Nt01fK_yfjDI5k9eJqgBuWHsGzwuE794OilnaaaQXxA/edit](https://docs.google.com/forms/d/1Nt01fK_yfjDI5k9eJqgBuWHsGzwuE794OilnaaaQXxA/edit) [Accessed 18 March 2025].
Google. (n.d). Nigerian Egg sauce. Retrieved from: [https://docs.google.com/forms/d/16sG2mCNr28K3Qvg8OH_-2HhwpWwZTK-Abe1RzULn2AQ/edit](https://docs.google.com/forms/d/16sG2mCNr28K3Qvg8OH_-2HhwpWwZTK-Abe1RzULn2AQ/edit)  [Accessed 18 March 2025].
Google. (n.d).Pancake and Corned beef sauce. Retrieved from: [https://docs.google.com/forms/d/1aX2SuG4VKgMMBCbPMTQf4Gyc09VXCSo3nPjyNpTV6Hw/edit](https://docs.google.com/forms/d/1aX2SuG4VKgMMBCbPMTQf4Gyc09VXCSo3nPjyNpTV6Hw/edit)  [Accessed 18 March 2025].
Google. (n.d).Chicken Shawarma. Retrieved from: [https://docs.google.com/forms/d/1--ptWfpEo1Gmw1MepqJpaSA6nmfkRzaEwotiXqwotjo/edit](https://docs.google.com/forms/d/1--ptWfpEo1Gmw1MepqJpaSA6nmfkRzaEwotiXqwotjo/edit)  [Accessed 18 March 2025].

LearnDesign. (2021 November 9). GB Scroll To Top Button (Back To Top) Using Simple JAVASCRIPT | Click to Scroll Top | CSS Smooth Scroll. [YouTube video]. Retrieved from: https://youtu.be/3Jbb3sQVVq0  [Accessed 29 March 2025].

Google. (n.d). Nigerian Fried Rice. Retrieved from: [https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_upward:FILL@0;wght@400;GRAD@0;opsz@24&amp;icon.size=24&amp;icon.color=%235f6368&amp;icon.platform=web&icon.size=24&icon.color=%235f6368&icon.query=arrow+up](https://docs.google.com/forms/d/1Nt01fK_yfjDI5k9eJqgBuWHsGzwuE794OilnaaaQXxA/edit) [Accessed 29 March 2025].

Google. (n.d). Arrow up [Icon]. Retrieved from: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_upward:FILL@0;wght@400;GRAD@0;opsz@24&amp;icon.size=24&amp;icon.color=%235f6368&amp;icon.platform=web&icon.size=24&icon.color=%235f6368&icon.query=arrow+up [Accessed 29 March 2025].
