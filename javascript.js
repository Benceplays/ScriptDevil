var text = ["Developer", "Hacker", "Cheater", "Script Devil"];
var counter = 0;
var inst = setInterval(change, 1000);

console.log("asdasd");

function change() {
  document.getElementById("welcomemessage").innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
