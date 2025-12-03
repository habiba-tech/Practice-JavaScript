let storyBox = document.getElementById("storyBox");
let btn = document.getElementById("btn");

// Parts of story stored in arrays
let characters = ["a cat", "a wizard", "a robot", "a superhero", "a talking tree", "a baby dinosaur"];
let places = ["in a forest", "on the moon", "in a haunted house", "at school", "inside a video game"];
let actions = ["found a magic key", "started dancing", "fought a dragon", "lost their shoes", "built a time machine"];

btn.addEventListener("click", function(){

    let c = characters[Math.floor(Math.random()*characters.length)];
    let p = places[Math.floor(Math.random()*places.length)];
    let a = actions[Math.floor(Math.random()*actions.length)];

    let story = `One day, ${c} ${p} and suddenly ${a}!`;

    storyBox.innerText = story;
});
