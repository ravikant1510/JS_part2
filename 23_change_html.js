// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement("li");
// console.log(newTodoItem);
const newTodoItemText = document.createTextNode("Tech Students");
newTodoItem.appendChild(newTodoItemText);
// appendChild se bhi ho jayega 
console.log(newTodoItem);

// ab isko add krte hai
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);
console.log(newTodoItem);

/// now small shortcut


const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Music Student";
const todoList1 = document.querySelector(".todo-list");
todoList1.append(newTodoItem1);
// console.log(newTodoItem);


// ab append last main add krta hai vse hi prepend phle add kr deta hai
// todoList1.prepend(newTodoItem1);


// remove 
const todo1 = document.querySelector('.todo-list li');
todo1.remove();
console.log(todo1);


// before and after method

// before uha insert krta hai
// ul 
// prepend yha insert krta hai 
// li jo phle se tha
// append yha insert krega 
// ul close
// after yha insert krega

const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "Yh bhi thik hai";
const todoList2 = document.querySelector(".todo-list");
todoList2.before(newTodoItem2);
// todoList2.after(newTodoItem2); 

