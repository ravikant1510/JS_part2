// intro to events

// iss link pr sab events hai
// https://developer.mozilla.org/en-US/docs/Web/Events

// click
// event add krne ke 3 trike hai

// method  1:
// html vale button main hi javascript add kr do onclick property main
{/* <button class="btn btn-headline" onclick="console.log('You clicked me')">Learn More</button> */}
// yh purana trika hai, km use krte hai
 

// method 2: yh bhi km use krte hai
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked me !!!!");
// }

// method3: addEventListener
const btn1 = document.querySelector(".btn-headline");
function clickme(){
    console.log("you clicked");
}
btn1.addEventListener("click",clickme); 

btn1.addEventListener("click",function(){
    // aise function bhi bna skte the 
    // is function ki jgh arrow function bhi lga skte hai
}); 
