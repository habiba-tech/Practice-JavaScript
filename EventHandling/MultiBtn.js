let buttons = document.querySelectorAll(".b");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        console.log("You clicked: " + btn.innerText);
    });
});
