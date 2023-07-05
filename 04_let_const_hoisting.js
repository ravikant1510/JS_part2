// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization

// to let and const both are hoisted,bhle hi uninitialized hai but first line execute hone se phle hi memory main present hai 
// they are present in memory and Globel Execution Context but
// they are uninitialized
console.log(firstName);
let firstName = "Ravikant";
console.log(firstName);


// TDZ -> temporal dead zone
// jaise jb GEC chal rha tb koi sa variable jo let ya const se bna hai
// (mtlb jo bn chuka hai, globel memory main hai but), us time se jab 
// code execution time tk (jab tk initialize nhi hota) use
// temporal dead zone bolte hai

// Globel execution context and second is function execution context

// jab koi function call hota hai to fir function execution context create hota hai
// isme nhi do chize hoti hai creation phase and execution phase.
// cration main abse phle arguments naam ka array like object create hota hai
// baki kaam similarly jo variables bna rkhe hai unko memory milegi
// arguments ka use ab nhi krte pr phle krte the.. arguments[0] -> first argument like that
