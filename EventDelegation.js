

<script>
document.getElementById("menu").addEventListener("click", function(event){
    if (event.target.tagName === "LI") {
        console.log("Clicked: " + event.target.innerText);
    }
});
</script>
