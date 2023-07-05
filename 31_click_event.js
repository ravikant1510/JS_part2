// clickevent.html se

// we have 3 buttons, un sab main event listner add krna hai to vo
// ek trika to hai ki endividually add kr de like this

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log("you clicked me");
// })

// dusra method
const allButtons = document.querySelectorAll(".my-buttons button");

// this is case main button ko point kr rha so... humne uska textContent print kr diya
// arrow function lgate to this window object ke equal ho jata
for(let button of allButtons){
    button.addEventListener("click", function(){
        // console.log("you clicked me");
        console.log(this.textContent);
    })
};

// yha foreach bhi lga skte ho,normal forloop bhi lga skte hai
for(let i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener("click", function(){
        console.log(this.textContent);
    })
}

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    })
})