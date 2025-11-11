//DOM (document object modle)

// Selecting  Elements

//By Id
document.getElementById("title");

//By Class
document.getElementsByClassName("myclass");

//By tag
document.getElementsByTagName("p");

//Querry Selector
document.querySelector(".box");
document.querySelectorAll("#idNmae");

document.querySelectorAll("P");

//changing text
document.getElementById("title").innerText = "Welcome";

//Change HTML inside:
Element.innerHTML = "<b>Hello</b>";

//Change css

Element.style.color = "red";
Element.style.background = "yellow";
Element.style.fontSize = "20px";

//Changing Attributes
Element.setAttribute("src", "img.jpg");
Element.setAttribute("class", "active");

//Working with classes
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("dark");

//Creating Elements
let p = document.createElement("p");
p.innerText = "Hello";
document.body.appendChild(p);

//Removing Elements 
element.remove();


//EVENT 
btn.addEventListener("click",function(){
    console.log("Clicked");
});

//Click 
//mouseover
//keydown
//keyup
//input
//sumbit

//Input Handling
let value =
document.getElementById("input").value;

