// how to get dimention of element

// height width
const sectionTodo = document.querySelector(".section-todo"); 
const info  = sectionTodo.getBoundingClientRect();
// it gives object which has all the information ki width,height,x,y etc
console.log(info);
