// select element using query selecter

const mainHeading = document.querySelector("#main-heading");
mainHeading.innerText = "Using querySelector";

const navItem = document.querySelector(".nav-item");
navItem.innerText = "Home2";

// CSS ki trh querySelector main # lga ke id select kr do
// and . lga kr class

// but querySelector sirf phla element de dega so 
// we will use querySelectorAll

const allNav = document.querySelectorAll(".nav-item");
console.log(typeof allNav);
console.log(allNav);
