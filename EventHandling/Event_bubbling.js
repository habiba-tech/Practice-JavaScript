document.getElementById("outer").addEventListener("click", function(){
    console.log("Outer Div Clicked");
}, false); // bubbling (default)

document.getElementById("inner").addEventListener("click", function(){
    console.log("Inner Div Clicked");
}, false);
