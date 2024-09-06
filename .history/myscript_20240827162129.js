// let getdaty=document.querySelector("#selday").value;

// console.log(getdaty);



document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.querySelector("#selday");
    const heading = document.querySelector("#heading");

    // Add event listener to update the heading when the selected day changes
    selectElement.addEventListener("change", function() {
        const selectedDay = selectElement.value;
        switch(selectedDay){
         case "1":    
        heading.textContent = `Hi Anurag Bro, Selected day:Sunday`;
         break;
        }
    });
});
