// change styles of element 

const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);

mainHeading.style.color = "red";


// jo upar nav-item vali li hai unka color change krna hai
const allNav = document.querySelectorAll("li.nav-item a");
console.log(typeof allNav);
console.log(allNav);

// for(let key of Object.values(allNav) ){
//     key.style.color = "red";
//     key.color = "red";
//     console.log(key)
// }


allNav.forEach((nav)=>{
    console.dir(nav);
    nav.style.color = "red";
})
 
