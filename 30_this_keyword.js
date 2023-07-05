// this keyword

const btn = document.querySelector(".btn-headline");

// yha function aise bnane pr
// this ki value vo button hai
// agar function arrow function hota to this window object hota
// kyunki arrow function main this ki value ek level up vali le leta hai 
btn.addEventListener("click", function(){
    console.log("button is clicked");
    console.log("value of this keyword");
    console.log(this);
})
