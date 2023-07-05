// InnerHTML

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);

headline.innerHTML   =   "<h1>Inner HTML changed </h1>";
headline.innerHTML  +=  "<button class = \"btn  btn-headline \">Learn More </button>";