let getdaty=document.querySelector("#selday").value;
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