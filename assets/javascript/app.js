/*
You'll create a trivia form with multiple choice or true/false options (your choice).

The player will have a limited amount of time to finish the quiz.

The game ends when the time runs out. The page will reveal the number of questions that 
players answer correctly and incorrectly.
Don't let the player pick more than one answer per question.

Don't forget to include a countdown timer. 
*/


/*variables*/

var totalquestions = 3;

var question1 = "Who is buried in Grant's Tomb?";
var question2 = "What is the meaning of life?";
var question3 = "Why do birds suddenly appear?";

var question1Answers = ["a) General Ford", "b) President Lincoln", "c) General Grant"]
var question2Answers = ["a) 42", "b) Happiness", "c) Children"]
var question3Answers = ["a) It's Spring", "b) It's Fall", "c) Because you are near"]


var correctchoices = new Array()
question1Answers[3] = "c) General Grant" 
question2Answers[1] = "a) 42"
question3Answers[3] = "c) Because you are near"

/*functions and scripting for trivia*/

while(countdown != 0) {

}



/*add timer */

var countDown = 10000

var x = setInterval(function() {

  var actualTime = countDown--
  document.getElementById("timer").innerHTML = "You have " + seconds + " seconds";

  if (actualTime <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TimesUp";
  }
}, 1000);

/* Correct and Incorrect Counter

/* OnClick Events*/
	/* Start */



	/*reset*/

