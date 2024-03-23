//Calculates the age of a person based on their birthdate 
//and displays it on the webpage.
const birthday = new Date('2004-05-18');
const now = new Date();
const myAge = new Date(now - birthday).getFullYear() - 1970;
document.getElementById('ageSpan').innerHTML = myAge + ' years old';

/* Closes and opens the side menu on mobile */

//Assigns the element with the class "menu-mobile" to the variable menuMobile in JavaScript.
const menuMobile = document.querySelector(".menu-mobile");

//uses the querySelector method to select the <body> element in the HTML document and assigns it to the body constant in JavaScript.
const body = document.querySelector("body");

/*adds a click event listener to the menuMobile element. 
When the element is clicked, it checks if it has a class of "bi-list". 
If it does, it replaces the class with "bi-x". 
If it doesn't have the class "bi-list", it replaces the class with "bi-list".
*/ 
menuMobile.addEventListener("click", () => {
    if (menuMobile.classList.contains("bi-list")) {
        menuMobile.classList.replace("bi-list", "bi-x");
    } else {
        menuMobile.classList.replace("bi-x", "bi-list");
    }
    body.classList.toggle("menu-nav-active");

    /* Using ternary conditions: 

      menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
    */

});

// Closes the menu when clicked on an item and changes the icon to a list

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})