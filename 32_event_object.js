// when any event is performed
// to browser 2 kaam krta hai
// 1) callback function JS engine ko dega execute krne ko
// 2) callback function ke saath jo event perform hua hai uski information bhi dega
//    in object form

const firstButton = document.querySelector('#one');
// yh event object aa rha hai
firstButton.addEventListener('click',function(event){
    console.log(event);
})

const allButtons = document.querySelectorAll(".my-buttons button");
// event object main bhut sare properties hai but one is target and currentTarget
//  to aise ab event object jo mil rha hai, uske karn ab apn arrow function bhi use kr pa rhe hai
for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget);
    })
};