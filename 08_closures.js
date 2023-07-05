function myFunction(power){
    return function(number){
        return number ** power;
    }
}

// arrow function main convert krte hai 😅
// const myFunction = power => number => number ** power;

const square = myFunction(2);
const ans = square(3);
console.log(ans);//3^2=9

const cube = myFunction(3);//3^3=27
const ans2 = cube(3);
console.log(ans2);