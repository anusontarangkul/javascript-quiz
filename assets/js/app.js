// JS Questions and choices
let questionCounter = 0;
const questions = [
    {
        question: "Which one of these keywords is NOT a JavaScript data type?",
        choice1: "undefined",
        choice2: "boolean",
        choice3: "dictionary",
        choice4: "string",
        answer: 1
    },
    {
        question: "Which one of these keywords does NOT declare a new variable in JavaScript?",
        choice1: "var",
        choice2: "let",
        choice3: "const",
        choice4: "def",
        answer: 4
    },
    {
        question: "Which one of these data types is a reference value",
        choice1: "object",
        choice2: "symbol",
        choice3: "string",
        choice4: "boolean",
        answer: 1
    },
    {
        question: "Who created JavaScript?",
        choice1: "Microsoft",
        choice2: "Netscape",
        choice3: "Sun Microsystems",
        choice4: "Oracle",
        answer: 3
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choice1: "default",
        choice2: "finally",
        choice3: "throw",
        choice4: "undefined",
        answer: 1
    },
    {
        question: "Which method removes the last element from an array and returns that element",
        choice1: "forEach()",
        choice2: "pop()",
        choice3: "push()",
        choice4: "Concat()",
        answer: 2
    },



]

console.log(questions)

const startBtnEL = document.getElementById("start-btn");
const quizStartEL = document.getElementById("quiz-start");
const quizPageEL = document.getElementById("quiz-page");
const containerMainEL = document.getElementById("container-main");

// begin quiz

const startQuiz = () => {
    // remove start page
    toggleStart();
    // toggleQuestion();
    createQuestion(questions);


    // load questions page
}


const toggleStart = () => {
    if (quizStartEL.style.display === "none") {
        quizStartEL.style.display = null;
    } else {
        quizStartEL.style.display = "none";
    }
}

const toggleQuestion = () => {
    quizPageEL.style.display = null;

    // console.log(quizPageEL.style)
    // if (quizPageEL.style.display === null) {
    //     console.log("test")
    //     quizPageEL.style.display = null;
    // } else {
    //     quizPageEL.style.display = "visible";

    // }
}

const createQuestion = (q) => {
    if (questionCounter === questions.length) {
        endgame();
    }
    let questionContainer = document.createElement("div");
    questionContainer.innerHTML = `<h2>${q[questionCounter].question}<h2/>    
 
    <div class="container-btn">
      <div class="btn-child">
        <button>${q[questionCounter].choice1}</button>
      </div>
      <div class="btn-child">
        <button>${q[questionCounter].choice2}</button>
      </div>
      <div class="btn-child">
        <button>${q[questionCounter].choice3}</button>
      </div>
      <div class="btn-child">
        <button>${q[questionCounter].choice4}</button>
      </div>
    </div>
    <hr />
    <p class="answer">Correct</p> 

`;
    containerMainEL.append(questionContainer);


}

const endgame = () => {

}

startBtnEL.addEventListener("click", startQuiz);