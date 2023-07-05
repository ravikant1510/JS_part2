  // hoisting

// jab sara code execute ho jayega tb stack se Globel Execution context pop ho jayega
// Current execution context bhi rhta hai

console.log(this);
console.log(window);
console.log(myFunction);//pura function print krega
console.log(fullName);

// function declaration
function myFunction(){
    console.log("This is my function");
}

var firstName = "Ravikant";
var lastName = "Vaishnav";
var fullName = firstName +" "+ lastName;
console.log(fullName); 