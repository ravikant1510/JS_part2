// Add new HTML elements to page


// innerHTML to add html element
const todoList = document.querySelector(".todo-list");
console.log(todoList);
// todoList.innerHTML = "<li>New Todo </li>"; //for replacment
todoList.innerHTML += "<li>New Todo </li>";
// but aise nhi krna chaiy, it have performance issues
// jab pura hi html change krna ho tb iska use krna chahiye

