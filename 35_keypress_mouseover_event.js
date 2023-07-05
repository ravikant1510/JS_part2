// keypress event
// mouseover event

const body = document.body;
// keyboard se koi bhi key press krne pr
body.addEventListener("keypress", (e)=>{
    console.log(e.key);
});

const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover event occured"); 
})

mainButton.addEventListener("mouseleave",()=>{
    console.log("mouse leave event occured ");
})