function hello(x){
    const a = "var1";
    const b = "var2";
    return function(){
        console.log(a,b,x); // var1 var2 hii
    }
}

const ans = hello("hii");
ans();