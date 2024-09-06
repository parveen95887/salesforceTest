// let getdaty=document.querySelector("#selday").value;
// console.log(getdaty);

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