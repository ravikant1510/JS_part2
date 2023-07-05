const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList); // gives ki kitni classes hai

// sectionTodo main ek or class add kr di
// sectionTodo.classList.add('bg-dark');
// to remove one class
// sectionTodo.classList.remove("container");


// to check if perticular class apply to the element or not
const ans = sectionTodo.classList.contains("container");
console.log(ans);


// togle -> yh phle class hai to remove kr dega or agar nhi hai to 
// add kr dega

sectionTodo.classList.toggle("bg-dark");

const header = document.querySelector(".header");

// css main consi class pe ki css phle and kiski baad main hai vo kafi matter krta hai 
// baad vali phle vali ko overwrite kr degi and usse result change ho jayega

 