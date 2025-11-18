let btn = document.getElementById("btn");

// onclick → only one function works
btn.onclick = function(){
    console.log("First");
};
btn.onclick = function(){      // overrides above
    console.log("Second");
};

// addEventListener → both run
btn.addEventListener("click", function(){
    console.log("A");
});
btn.addEventListener("click", function(){
    console.log("B");
});
