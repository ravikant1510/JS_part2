var firstName = "Ravikant";
 
  
// phle code compile hota hai then execute hota hai
// compilation ke bhi 3 phases hote hai
// 1. tokenizing/ laxing -> code ko chunks main devide krte hai
// 2. parshing ->  AST(Abstract Syntex Tree) bnta hai
// 3. code generation -> AST ke help se executable formate main code generate hota hai
// jyada deep main compile ka nhi dekhna hai just ki pure code ka go through hota hai
// to Early error checking ho jati hai and variable ka scope pta chal jata hai

// Ecma ki documentation main likha hai ki 
// 1. Early error checking honi chahiye
// 2. Variable ka scope ka bhi code execution se phle pta hona chahiye 


// Now coming to code execution phase 
// In JS code executes inside execution context -> mtlb code ko execute krne ke liye
// hume execution context creat krna hoga, and jo sbse phle execution context create 
// hota hai use hum Globel Execution context khte hai
// unme fir variables ka pta lgta hai, this keyworld ki value pta chalti hai = window object
// 
// GEC ke bhi do phase hai
// 1. khud ka creation phase( memory mil jati hai variables vgrh ko)
// 2. Code Execution phase

// GEC stack ke andar add hota hai 


// JS khud ek Synchronous programming language and single threade programming language hai
// JS ek laxical scope language hai -> mtlb konsa variable kis scope ko belong krga vh
// apne declare krne ke trike pr depend krta hai.
