let questionNum = 0;
let question = "<h1>What is your name?</h1>";

let output = document.getElementById("output"); // store id="output" in output variable
output.innerHTML = question; // ouput first question

function bot() {
  let input = document.getElementById("input").value;
  console.log(input);

  if (questionNum == 0) {
    output.innerHTML = "<h1>hello " + input + "</h1>"; // output response
    document.getElementById("input").value = ""; // clear text box

    question = "<h1>How old are you?</h1>"; // load next question
    setTimeout(timedQuestion, 2000); // output next question after 2sec delay
  } else if (questionNum == 1) {
    output.innerHTML =
      "<h1>That means you were born in " + (2021 - input) + "</h1>";
    document.getElementById("input").value = "";
    question = "<h1>Where are you from?</h1>";
    output.innerHTML = "<h1>kurd " + question + "</h1>";

    setTimeout(timedQuestion, 2000);
  }
}

function timedQuestion() {
  output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function (e) {
  if (e.which == 13) {
    bot(); // run bot function when enter key pressed
    questionNum++; // increase questionNum count by 1
  }
});
