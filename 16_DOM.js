// get and set attributes
// class , href, name, type, id yh sab attribute hi hai
const link = document.querySelector("a");
console.log(link);
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));

link.setAttribute("href" , "https://google.com");


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


