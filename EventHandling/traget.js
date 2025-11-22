>

<script>
document.getElementById("box").addEventListener("click", function(event){
    console.log("Target:", event.target.tagName);       // element actually clicked
    console.log("CurrentTarget:", event.currentTarget.id); // element with listener
});
</script>
