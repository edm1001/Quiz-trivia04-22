//Create 5 easy coding questions
const quizQuestions = [
    {
        title:"What does HTML stand for?",
        choices:[
            "Hypertext Markup Language",
            "Hypertext Message Language",
            "Hypertension Mockup Language",
            "None of the Above"
        ], 
        answer : "Hypertext Markup Language"
    },
    {
        title:"What does CSS stand for?",
        choices: [
            "Cascading Show Style",
            "Cascading Style Sheet",
            "Control Source Styling",
            "None of the above"
        ],
        answer:"Cascading Style Sheet",
    },
    {
        title:"What is used to enclose an array in Javascript?",
        choices: [
            "{} Curly Brackets",
            "() Parantheses",
            "[] Brackets",
            "All of the above"
        ],
        answer:"[] Brackets"
    },
    {
        title:"What HTML tag can link other files or sites",
        choices:  [
            "<a>",
            "<h1>",
            "<p>",
            "<href>"
        ],
        answer:"<href>"
    },
    {
        title:"What git command allows us to make other branches?",
        choices:[
            "git commit -b",
            "git checkout -b",
            "git add -b",
             "None of the above"
            ],
        answer:"git checkout -b",
    },
];

//Getting variables and link the html elements
const startBtn = document.querySelector('#start-btn');
const timeLeft=  document.querySelector('#time-view');
const quizPanel = document.querySelector('.quiz-intro');
//Make variables for the questions
const totalQuestions = quizQuestions.length;
const quizResult = document.querySelector(".result-page");
const userPoints = document.querySelector(".user-score");
const submitQuiz = document.querySelector("#submit-btn");
const questionList = document.querySelector('#question')
const timerObj = document.querySelector('#time-view');//timer
const questionNum =0;//start of question
const questionBox = document.querySelector("question-box");
const answerA = document.querySelector('#choiceA'); 
const answerB = document.querySelector('#choiceB'); 
const answerC = document.querySelector('#choiceC'); 
const answerD = document.querySelector('#choiceD'); 
const nextBtn = document.querySelector('.next-button');
const choicesBox = document.querySelector('#answers-box');

choicesBox.style.display= "none";
nextBtn.style.display= "none"; 
quizResult.style.display="none";

const point = 0;


const penalty = 5;
//Start the quiz function 
function startQuiz() {  
    point=0;
    time = 75;
    
    
}
//countdown
var countdown = function () {
    // timer decrements 1 per second
    var timeInterval = setInterval(function () {
      // when timer finishes
      if (countdown.time <= -1) {
        clearInterval(timeInterval);
        // timer is still going
      } else {
        timerObj.textContent = "Time: " + countdown.time;
        countdown.time--;
      }
    }, 1000);
}


//append the questions

startBtn.addEventListener('click', function() {
    
    quizPanel.style.display="none"; 
    choicesBox.style.display=""
    
    questionList.textContent = quizQuestions[0].title
    questionList.setAttribute("style", "margin:50px width:50%; text-align:center;");

    answerA.textContent = quizQuestions[0].choices[0];
    //add Event Listeners
    answerA.onclick = function () {
        showQuestion2();
        point++;
    };
    answerB.textContent = quizQuestions[0].choices[1];
    answerB.onclick = function () {
        showQuestion2();
    };
    answerC.textContent = quizQuestions[0].choices[2];
    answerC.onclick = function () {
        showQuestion2();
    };
    answerD.textContent = quizQuestions[0].choices[3];
    answerD.onclick = function () {
        showQuestion2();
    };
    startQuiz();
    });

function showQuestion2() {
    
    
    quizPanel.style.display="none"; 
    choicesBox.style.display="";
    questionList.textContent = quizQuestions[1].title
    questionList.setAttribute("style", "margin:50px width:50%; text-align:center;");

    answerA.textContent = quizQuestions[1].choices[0];
    //add Event Listeners
    answerA.onclick = function(){
        showQuestion3();
    };
    answerB.textContent = quizQuestions[1].choices[1];
    answerB.onclick = function(){
        showQuestion3();
        point++;
    };
    answerC.textContent = quizQuestions[1].choices[2];
    answerC.onclick = function(){
        showQuestion3();
    };

    answerD.textContent = quizQuestions[1].choices[3];
    answerD.onclick = function(){
        showQuestion3();
    };
    startQuiz();
};
function showQuestion3() {
    
    quizPanel.style.display="none"; 
    choicesBox.style.display="";
    questionList.textContent = quizQuestions[2].title
    questionList.setAttribute("style", "margin:50px width:50%; text-align:center;");

    answerA.textContent = quizQuestions[2].choices[0];
    //add Event Listeners
    answerA.onclick = function(){
        showQuestion4();
    };
    answerB.textContent = quizQuestions[2].choices[1];
    answerB.onclick = function(){
        showQuestion4();
    };
    answerC.textContent = quizQuestions[2].choices[2];
    answerC.onclick = function(){
        showQuestion4();
        point++;
    };

    answerD.textContent = quizQuestions[2].choices[3];
    answerD.onclick = function(){
        showQuestion4();
    };
    startQuiz();
};

function showQuestion4() {
    
    quizPanel.style.display="none"; 
    choicesBox.style.display="";
    questionList.textContent = quizQuestions[3].title
    questionList.setAttribute("style", "margin:50px width:50%; text-align:center;");

    answerA.textContent = quizQuestions[3].choices[0];
    //add Event Listeners
    answerA.onclick = function(){
        showQuestion5();
    };
    answerB.textContent = quizQuestions[3].choices[1];
    answerB.onclick = function(){
        showQuestion5();
    };
    answerC.textContent = quizQuestions[3].choices[2];
    answerC.onclick = function(){
        showQuestion5();
    };

    answerD.textContent = quizQuestions[3].choices[3];
    answerD.onclick = function(){
        showQuestion5();
        point++;
        
    };
    startQuiz();
};
//take this to highscore
function showQuestion5() {
    
    quizPanel.style.display="none"; 
    choicesBox.style.display="";
    questionList.textContent = quizQuestions[4].title
    questionList.setAttribute("style", "margin:50px width:50%; text-align:center;");

    answerA.textContent = quizQuestions[4].choices[0];
    //add Event Listeners
    answerA.onclick = function(){
        appendResultPage();
    };
    answerB.textContent = quizQuestions[4].choices[1];
    answerB.onclick = function(){
        appendResultPage();
        point++;
    };
    answerC.textContent = quizQuestions[4].choices[2];
    answerC.onclick = function(){
        appendResultPage();
    };

    answerD.textContent = quizQuestions[4].choices[3];
    answerD.onclick = function(){
        appendResultPage();
    };
};

//append the result page
function appendResultPage() {
    quizResult.style.display="";
    questionList.style.display="none";
    choicesBox.style.display= "none";
    console.log(point); 
    localStorage.setItem('point', point);
    quizResult.setAttribute("style", "float:center");
    userPoints.textContent = point;
    // submitQuiz.addEventListener("click", function(){
    //     window.location.href= "./highscores.html";
    //     point = 0;
    // })


};

// local storage the points

 





//add and subtract points by making event listeners for the correct and wrong answers, add this for the choices declarations
// var countEl = document.querySelector("#count");
// Attach event listener to increment button element
// incrementEl.addEventListener("click", function() {
//     count++;
//     setCounterText();
//   });
  
//   // Attach event listener to decrement button element
//   decrementEl.addEventListener("click", function() {
//     // Action will fire if count is greater than  0
//     if (count > 0) {
//       count--;
//       setCounterText();
//     }
//   });

//start question 1
  //quizCountdown();

// const quizContentObj = document.querySelector(".question");  
// showQuestion1.textContent = "helloWORLD";
// showQuestion1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// quizContentObj.appendChild(showQuestion1);  
// });


//show question
//Set a condition that every question has a time limit

//create question variable divs
// var showQuestion1 = function () {
//     quizContentObj.innerHTML='hello',

// }
//call all functions


//innerText to put text there
//match the choices to the answer
//add points for score
//add score total to highscore

//make a time interval and make the end time the total score.
















//attempt1
//start quiz func
//Make the question appear to the page
//function startQuestions(questionNum) {
   // quizContent.innerHTML ="";
    //quizContent.innerHTML ="";
    //let questionTitle = questions[questionNum].title;
    //let questionChoices = questions[questionNum].choices;
    //make a for loop on the array
    //for (let i=0; i<totalQuestions; i++) {
        //append question title
    
//    }
//}

    //countdown function
    //call question function to display the questions and answer choices
  //  startQuestions(questionNum);
//}