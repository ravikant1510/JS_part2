// some old methods to support Internet Explorer

// appendChild
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "kya ho rha";
ul.appendChild(li);
// normal aage jake add ho jayega

//insertBefore
const ul1 = document.querySelector(".todo-list");
const li1 =document.createElement("li");
li1.textContent = "insertBefore";
const reference =  document.querySelector(".first-todo");
ul1.insertBefore(li1,reference);
 
// replaceChild
const ul2 = document.querySelector(".todo-list");

// nya node
const li2 =document.createElement("li");
li2.textContent = "insertBefore";

const reference2 =  document.querySelector(".first-todo");
ul2.replaceChild(li2,reference2);

// removeChild 

ul2.removeChild(reference2);