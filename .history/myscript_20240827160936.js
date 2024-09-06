// let getdaty=document.querySelector("#selday").value;

// console.log(getdaty);

addEventListener("DOMContentLoaded",function(){

    let selelement=documetn.querySelector("#selday");
    let haeding=document.querySelector("heading");

    haeding.textContent=`Hi Anurag Your are selected day ${selelement}`;

    selelement.addEventListener("change",function(){
     
        let selday=selelement.value;
        haeding.textContent=`hi Anurag bro slected by:${selelement}`;
    });
})

let initialDay = document.getElementById("#selday").value;
console.log("Initially selected day:", initialDay);
let res=document.querySelector("#heading");
switch(getdaty)
{
    case 1:
    res.innerText="Sunday";
    break;
    case 2:
       res.innerText="Monday";
    break;    
}