
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    // printName function jo return ho rha hai vo
    // local variables vgrh ko saath leke return hoga
    return printName;
}

const ans = printFullName("Ravikant", "Vaishnav");

ans(); // Ravikant Vaishnav print kr dega 


// to closure is: jab function return hota hai to vo jha pe 
// present hai vha ki local memory ko leke return hota hai
// so that can use that things when required 