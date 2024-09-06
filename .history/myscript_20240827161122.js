// let getdaty=document.querySelector("#selday").value;

// console.log(getdaty);

addEventListener("DOMContentLoaded",function(){

    let selelement=documet.querySelector("#selday");
    let haeding=document.querySelector("heading");

    haeding.textContent=`Hi Anurag Your are selected day ${selelement}`;

    selelement.addEventListener("change",function(){
     
        let selday=selelement.value;
        haeding.textContent=`hi Anurag bro slected by:${selelement}`;
    });
})

