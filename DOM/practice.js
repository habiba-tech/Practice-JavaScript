// Q1
        function changeText() {
            document.getElementById("title").innerText = "Welcome to DOM";
        }

        // Q2
        function changeColor() {
            document.getElementById("box").style.background = "yellow";
        }

        // Q3
        function showText() {
            let value = document.getElementById("userInput").value;
            document.getElementById("output").innerText = value;
        }

        // Q4
        function addTask() {
            let li = document.createElement("li");
            li.innerText = "New Task";
            document.getElementById("taskList").appendChild(li);
        }

        // Q5
        function removePara() {
            document.getElementById("info").remove();
        }

        // Q6
        function toggleDark() {
            document.body.classList.toggle("dark");
        }

        // Q7
        let count = 0;

        function inc() {
            count++;
            document.getElementById("num").innerText = count;
        }

        function dec() {
            count--;
            document.getElementById("num").innerText = count;
        }

