console.log(myFunction);//undefined 
// phle vali file main function declaration tha isliye vo pura print ho gya
// abhi var ka use krke function expression bnaya hai to undefind ki trh store hoga

// function expression
var myFunction = function(){
    console.log("this is myFunction");
}

console.log(myFunction); // ab function print ho jaega