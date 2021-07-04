


// Creation of Variables
var quizContainer = document.getElementById ('questions');
var quizResults = document.getElementById ('results');
var start = document.getElementById ('startButton');
var highscore = document.getElementById ("highscore");
var questionTitle = document.getElementById ("questionTitle");
var questionOptions = document.getElementById ("options");
var intro = document.getElementById ("intro")
var timeEl = document.getElementById('timer');
var timerForClock = 75;
var score = 0;
var currentQuestion = 0;


// List of questions also known objects 
var questions = [  {
    prompt: "Inside which HTML element do we put the JavaScript?",
    options: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
    answer: "d. <script>",
}
,
{
    prompt: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
    answer: "c. quotes"
},
{
    prompt: "Arrays in JavaScript can be used to store _____.",
    options: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
    answer: "b. other arrays"
},
{
    prompt: "Commonly used data types DO NOT include:",
    options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    answer: "c. alerts"
},
{
    prompt: "How do you create a function in JavaScript",
    options: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
    answer: "b. function myFunction()"
},
{
    prompt: "How do you call a function named myFunction?",
    options: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
    answer: "c. myFunctions()"
},
{
    prompt: "To see if two variables are equal in an if / else statement you would use ____.",
    options: ["a. =", "b. ==", "c. 'equals'", "d. !="],
    answer: "b. =="
},
{
    prompt: "The first index of an array is ____.",
    options: ["a. 0", "b. 1", "c. 8", "d. any"],
    answer: "a. 0"
},
{   prompt: "The word boolean means?",
    options: [ "true or false", "black or white", "right or wrong"],
    answer: "true or false"

},
{
    prompt: "How to write an IF statement in JavaScript?",
    options: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
    answer: "c. if(i == 5)"
},
{
    prompt: "How do you add a comment in a JavaScript?",
    options: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
    answer: "a. //This is a comment"
},
{
    prompt: "Which event occurs when the user clicks on an HTML element?",
    options: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
    answer: "a. onclick"
}

];

/*the arguments - defining the rule of for loop
for(var i=0; i < questions.length ; i++) {}
*/

//where do I start the function?

function timeSet(){
    var quizCountdown = setInterval(function(){
        timeEl.innerText = "Timer:" + timerForClock--
        if (timerForClock === 0) {
        
          clearInterval(quizCountdown);
        }
      }, 1000);



    }
// this is how I will change the display of html element
function display (){
intro.style.display ="none"


var question= questions[currentQuestion]

//this will return a object where we will assign to a variable.
questionTitle.textContent=question.prompt
for(var i=0; i < question.options.length ; i++) {
var button =document.createElement("button")
button.innerText=question.options[i]
questionOptions.append(button)
}







}
/*
var results = window.prompt (questions [i.prompt])
if(response == questions [i]. answer){
    score++;
    
    alert ("correct!");
}   else {

    alert ("incorrect!");
}
{   alert ("you've got " + score + "/" + questions.length);
*/





// This section will be for the actual functions /scripts to be run

function startTheQuiz(){
    timeSet()

    display()




}

// function to handle eventListener 
start.addEventListener ("click", startTheQuiz);