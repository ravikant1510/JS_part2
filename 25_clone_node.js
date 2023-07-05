// clone node

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");

li.textContent = "new todo";
ul.append(li);
ul.prepend(li);
// ek dene pr dusra hat rha hai 

const li2 = li.cloneNode(true); // true nhi lkenge to
// deep cloning nhi ho payega, text nhi aa payega mtlb ek blank li bn jayega
// ul.append(li);
// ul.prepend(li2);
