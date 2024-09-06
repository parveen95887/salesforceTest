// let getdaty=document.querySelector("#selday").value;

// console.log(getdaty);



document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.querySelector("#selday");
    const heading = document.querySelector("#heading");

    // Add event listener to update the heading when the selected day changes
    selectElement.addEventListener("change", function() {
        const selectedDay = selectElement.value;
        let day="";
        switch(selectedDay){
         case "1":    
         day="Sunday";
         break;
         case "2":    
         day="Monday";
         break;
         case "3":    
         day="Tusday";
         break;
         case "4":    
         day="Wednusday";
         break;
         case "5":    
         day="Thursday";
         break;
         case "6":    
         day="Friday";
         break;
         case "7":    
         day="Saturday";
         break;
         default:
         day="unskhown";
         break;
        }

        heading.textContent=`Hi Anurag you are select: ${day}`;
    });
});
