// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

const navItems = document.getElementsByClassName("nav-item");// HTMLCollection de rha
// this is array like object to hum indexing lga skte hai
// iterate kr skte hai
console.log(navItems);
console.log(navItems[1]);

const navItems1 = document.querySelectorAll(".nav-item"); // gives NodeList
// its aslo array like object
console.log(navItems1);