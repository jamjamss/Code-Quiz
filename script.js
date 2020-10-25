let start = document.querySelector("#start-btn")
let results = document.querySelector(".results")
let submitBtn = document.querySelector(".submit-btn")
let startPage = document.querySelector(".start-page")
let questionEl = document.querySelector(".question")
let questionText = document.querySelector("#question-text")
let A = document.querySelector("#A")
let B = document.querySelector("#B")
let C = document.querySelector("#C")
let D = document.querySelector("#D")
let timerEl = document.querySelector("#timer")
let time = 30
let timerId;
let currentQuestionIndex = 0;

let myQuestions = [
    { 
        question: "Commonly used data types DO NOT INCLUDE:",
        answers: {
            A: "Strings", 
            B: "Booleans",
            C: "Alerts",
            D: "Numbers"
        },
        correctAnswer: "C"
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        answers: {
            A: "Quotes",
            B: "Curly brackets",
            C: "Paranthesis",
            D: "Square brackets"
        },
        correctAnswer: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers:{
            A: "Numbers and strings",
            B: "Other arrays",
            C: "Booleans",
            D: "All the above"
        },
        correctAnswer: "D"
    

    },
     
    
]

function renderingQuestion() {
    let currentQuestion = myQuestions[currentQuestionIndex]
    console.log(currentQuestion)
    questionText.textContent = currentQuestion.question
    A.textContent = currentQuestion.answers.A
    B.textContent = currentQuestion.answers.B
    C.textContent = currentQuestion.answers.C
    D.textContent = currentQuestion.answers.D
    
}


A.addEventListener("click", function(event) {
    
   console.log(event)
    if(event.target.id === myQuestions[currentQuestionIndex].correctAnswer) {
      alert("Congrats!")  
    } else {
        alert("Wrong!")
        time--;
    } 
    currentQuestionIndex++;
    if (currentQuestionIndex >= myQuestions.length) {
        renderingQuestion ()
    } else {
        endQuiz ()
    }
    // check if currentQuestionIndex >= questions.length
    // if questions left:
    renderingQuestion()
    // if no questions left:
    // endQuiz()

})

B.addEventListener("click", function (event) {

    if(event.target.id === myQuestions[currentQuestionIndex].correctAnswer) {
        alert("Congrats!")  
      } else {
          alert("Wrong!")
          time--;
      } 
      currentQuestionIndex++;
      renderingQuestion()
      if (currentQuestionIndex <= myQuestions.length) {
        renderingQuestion ()
    } else {
        endQuiz ()
    }
  
})

C.addEventListener("click", function (event) {
    if(event.target.id === myQuestions[currentQuestionIndex].correctAnswer) {
        alert("Congrats!")  
      } else {
          alert("Wrong!")
          time--;
      } 
      currentQuestionIndex++;
      renderingQuestion()
      if (currentQuestionIndex <= myQuestions.length) {
        renderingQuestion ()
    } else {
        endQuiz ()
    }
  
})

D.addEventListener("click", function(event) {

    if(event.target.id === myQuestions[currentQuestionIndex].correctAnswer) {
        alert("Congrats!")  
      } else {
          alert("Wrong!")
          time--;
      } 
      currentQuestionIndex++;
      renderingQuestion()
      if (currentQuestionIndex <= myQuestions.length) {
        renderingQuestion ()
    } else {
        endQuiz ()
    }
  
})

function endQuiz () {
    // stop timer
    
    // record score
    // allow input of name
    // save name and score to high scores
    // redirect to high scores page
}



start.addEventListener("click", startGame)



function startGame() {
    startPage.style.display = "none"
    questionEl.style.display = "block"
    timerId = setInterval(clockTic, 1000)
    timerEl.textContent = time
    renderingQuestion() 
}
function clockTic() {
    if (time <=0) {
        clearInterval(time=1)
    }

    time--
    timerEl.textContent = time
}



