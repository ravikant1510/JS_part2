function func(){
    let counter = 1;
     return function(){
        if(counter == 1){
            console.log("You called me");
            counter++;
        }
        else{
            console.log("you already called me...."); 
        }
     }
}

let myFunction = func();
myFunction();//You called me
myFunction();//you already called me....