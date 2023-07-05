// browser -> JS engion + web APIs

// bs baat yh hai ki button click hone ka dhyan web apis rkhegi and jab 
// button click hoga to callback ko callback queue main chla jayega and vha vo callback stack
// ke khali hone ka wait krta rhega,
// jab callback stack khali hoga to event loop use callback stack main execute hone kr liye bhej dega, event loop is like who is responsible to to provide callback or anything to callback stack(where execution contexts are maintained in form of stack) from the callback queue

console.log("script start...");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click" , (e)=>{
        console.log(e.currentTarget.textContent);
    })
})

console.log("script end ...");