//grab score from localStorage
const score = localStorage.getItem(point, userInitial);
const highscore = document.querySelector('#highscores');
const userScore = document.querySelector('user-score')
const tryAgainBtn = document.querySelector('back')
const highscoreList = document.createElement("h3");
//set attribute for the highscores list


highscoreList.textContent = ""
highscore.setAttribute("style", "color:white; background: #999999; padding: 5px; margin-left: 35px;");
const submitQuiz = function(){

};
tryAgainBtn.addEventListener("click", function() {
    tryAgainBtn.window.location= "./index.html"
});


//create element
//text content