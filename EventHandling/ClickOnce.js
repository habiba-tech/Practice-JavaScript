<button id="once">Click Once</button>

<script>
let btn = document.getElementById("once");

function runOnce() {
    btn.style.background = "green";
    btn.removeEventListener("click", runOnce);
}

btn.addEventListener("click", runOnce);
</script>
