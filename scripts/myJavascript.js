console.log("Hello World");
function tryMe() {
  var buttonVariable = document.getElementById("button");
    console.log ("Button Clicked!");
    answerz();
  }
function answerz() {
  var howIsShe = document.getElementById("response").value;
  console.log("how is she?");
  if (howIsShe === "good") {
    alert("yippee, me too!");
  }
  else if(howIsShe === "so so") {
    alert("that's what coffee is for");
  }
  else if(howIsShe === "terrible") {
    alert("I'm sorry to hear that");
    }
  else {
    alert("look, something shiny!");
  }
}
