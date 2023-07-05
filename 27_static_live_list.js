// static list vs live list
// index.html se linked

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);  // abhi 5 hi dikhayega


// querySelectorAll hame static list degi
// getElementsBySomething hame live list degi


const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");//yh hume HTML collection deti hai and 
// vo hota hai live list
// querySelectorAll hume Node list deti hai and vo static list deti hai
// use koi bhi kr skte hai..pr jyadatr querySelectorAll use krte hai bcs 
// dusra extra space leta hai and or bhi kuch chize aage pta chlegi

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItem);
