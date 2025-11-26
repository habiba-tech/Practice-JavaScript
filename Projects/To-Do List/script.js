let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// Add new task
addBtn.addEventListener("click", function () {

    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <span class="delete">X</span>
    `;

    taskList.appendChild(li);

    input.value = "";
});

// Event Delegation for deleting tasks
taskList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }

});
