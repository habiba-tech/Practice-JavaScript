let button = document.getElementById("toggleBtn");
let modeText = document.getElementById("modeText");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.innerText = "Switch to Light Mode";
        modeText.innerText = "Current Mode: Dark";
    } else {
        button.innerText = "Switch to Dark Mode";
        modeText.innerText = "Current Mode: Light";
    }
});
