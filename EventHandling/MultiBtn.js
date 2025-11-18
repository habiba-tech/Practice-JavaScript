<button class="b">A</button>
<button class="b">B</button>
<button class="b">C</button>

let buttons = document.querySelectorAll(".b");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        console.log("You clicked: " + btn.innerText);
    });
});
