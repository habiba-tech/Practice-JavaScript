document.addEventListener("keydown", function(event) {
    document.getElementById("key").textContent = "Key: " + event.key;
    document.getElementById("code").textContent = "Code: " + event.keyCode;

    let combo = "";
    if (event.shiftKey) combo += "Shift ";
    if (event.ctrlKey) combo += "Ctrl ";
    if (event.altKey) combo += "Alt ";

    document.getElementById("extras").textContent = 
        "Shift / Ctrl / Alt: " + (combo || "None");
});
