const mainheading = document.getElementById("main-heading");
mainheading.textContent ="Fruit World";
mainheading.style.color="orange";

const header = document.getElementById("header");
header.style.backgroundColor="green";
header.style.borderBottom="3px solid orange";

const basketheading = document.getElementById("basket-heading");
basketheading.style.color="green";

// const thanks = document.getElementById("thanks");
// thanks.innerHTML ="<p>Please visit us again.</p>";

var thanks =document.querySelector("#thanks");
var paragraph =document.createElement("p");
paragraph.textContent="Please visit us again";
thanks.appendChild(paragraph);

/// task 2

const fruit =document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor="orange";

for(var i=0; i<fruit.length; i++){
    fruit[i].style.fontWeight="bold";
}

const listName = document.getElementsByTagName("li");
listName[4].style.color="blue";

for(var i=0;i<listName.length; i++){
    listName[i].style.fontStyle="italic";
}