// select element by using get element by id


//document.getElementById("main-heading") -> returns object, and 
// that object is basically representation of that object only

// console.log(document.getElementById("main-heading"));//isko dekh kr aisa lgega ki hume 
// HTML element return  ho rha hai but yh bs uski ek acchi representation main  btane ke liye hua hai.
// agar actual object dekhna hai to console.dir se hoga
console.dir(document.getElementById("main-heading"));
document.getElementById("main-heading").innerHTML = "contet changed by getElementById";