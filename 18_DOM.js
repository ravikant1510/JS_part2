// loop
// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

let navItems = document.getElementsByTagName("a");// HTMLCollection de rha
// this is array like object -> can apply indexing and have lenght property
console.log(navItems);
console.log(navItems[1]);

// Important
// we can't use forEach method to iterate over HTMLCollection

// simple for loop
// for(let l =0; l<navItems.length ;l++){
//     // console.log(navItems[l]);
//     navItems[l].style.backgroundColor = "white";
//     navItems[l].style.color = "green";
//     navItems[l].style.fontWeight = "bold";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// forEach aise HTMLCollection pe to lga nhi skte to hum 
// iss phle array main convert krke fir yh lg skte hai
navItems = Array.from(navItems);
navItems.forEach( navItem => {
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}); 


console.log("");
console.log("querySelectorAll");
 

const navItems1 = document.querySelectorAll(".nav-item a"); // gives NodeList
// console.log(navItems1);


// simple for loop
for(let l =0; l<navItems1.length ;l++){
    // console.log(navItems[l]);
    navItems1[l].style.backgroundColor = "white";
    navItems1[l].style.color = "black";
    navItems1[l].style.fontWeight = "bold";
}

// for of loop
for(let navItem of navItems1){
    navItem.style.backgroundColor = "white";
    navItem.style.color = "blue";
    navItem.style.fontWeight = "bold";
}

// forEach

navItems.forEach( navItem => {
    navItem.style.backgroundColor = "white";
    navItem.style.color = "pink";
    navItem.style.fontWeight = "bold";
}); 
