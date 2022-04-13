//Create 5 easy coding questions
const questions = [
    {
        title:"What does HTML stand for?",
        choices:["Hypertext Markup Language", "Hypertext Message Language", "Hypertension Mockup Language", "None of the Above" ],
        answer : "Hypertext Markup Language"
    },
    {
        title:"What does CSS stand for?",
        choices:["Cascading Show Style","Cascading Style Sheet","Control Source Styling","None of the above"],
        answer:"Cascading Style Sheet",
    },
    {
        title:"What is used to enclose an array in Javascript?",
        choices:["{} Curly Brackets","() Parantheses","[] Brackets","All of the above"],
        answer:"[] Brackets"
    },
    {
        title:"What is the HTML tag that can link other files or sites",
        choices:["<a>","<h1>","<p>","<href>"],
        answer:"<href>"
    },
    {
        title:"What git command allows us to make other branches?",
        choices:["git commit -b", "git checkout -b", "git add -b", "None of the above"],
        answer:"git checkout -b"
    },
];

//Getting variables and link the html elements
const startBtn = document.querySelector('#start-btn');
const timeLeft=  document.querySelector('#time-view');
const quizPanel = document.querySelector('.quiz-intro');
startBtn.addEventListener('click', startQuiz);
//Start the quiz function 
function startQuiz(){

}

//Make variables for the questions
//Set a condition to subtract points if user answers wrong
//Set a condition that every question has a time limit