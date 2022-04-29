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
        title:"What HTML tag can link other files or sites",
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

//Make variables for the questions
const quizContent = document.createElement("#questionsList");
const totalQuestions = questions.length;
const questionNum =0;//start of question
const quizResult = document.querySelector("#result-page");
const userPoints = document.querySelector(".user-score");
const submitQuiz = document.querySelector("#submit-btn");
userPoints.setAttribute("type", "text");
const penalty = 10;//must be put to 
//Start the quiz function 
function startQuiz() {
    quizPanel.innerHTML = "";
    quizContent.innerHTML = "";
    //reset the existing data after every question
    startQuestions();

//Make the question appear to the page
function startQuestions(questionNum) {
    quizContent.innerHTML ="";
    quizContent.innerHTML ="";
    let questionTitle = questions[questionNum].title;
    let questionChoices = questions[questionNum].choices;

    //make a for loop on the array
    for (let i=0; i<totalQuestions; i++) {
        //append question title
    
    }
}

    //countdown function
    //call question function to display the questions and answer choices
    showQuestions(questionNum);
}

//Set a condition for 15 seconds for every question

//Set a condition to subtract points if user answers wrong

//Set a condition that every question has a time limit
//when i click start quiz it leads to going into a different page