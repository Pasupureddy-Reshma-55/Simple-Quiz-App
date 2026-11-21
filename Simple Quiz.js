
// Array of question objects
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling?",
        answers: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        correct: 2
    },
    {
        question: "Which language is used for web interactivity?",
        answers: [
            "CSS",
            "JavaScript",
            "HTML",
            "SQL"
        ],
        correct: 1
    },
    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: 1
    },
    {
        question: "Which method displays a message in the console?",
        answers: [
            "print()",
            "alert()",
            "console.log()",
            "document.write()"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Display question
function showQuestion() {

    let questionElement =
        document.getElementById("question");

    let answerButtons =
        document.getElementById("answer-buttons");

    answerButtons.innerHTML = "";
    selectedAnswer = null;

    questionElement.innerHTML =
        (currentQuestion + 1) + ". " +
        questions[currentQuestion].question;

    // Loop through answers
    for (let i = 0;
         i < questions[currentQuestion].answers.length;
         i++) {

        let button = document.createElement("button");

        button.innerHTML =
            questions[currentQuestion].answers[i];

        button.className = "answer-btn";

        button.onclick = function() {
            selectAnswer(i, button);
        };

        answerButtons.appendChild(button);
    }
}

// Select answer
function selectAnswer(index, button) {

    selectedAnswer = index;

    let buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}

// Next question
function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    // Check correct answer
    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    }
    else {
        showResult();
    }
}

// Show final score
function showResult() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerHTML =
        "Your Score: " + score + " / " + questions.length;
}

// Restart quiz
function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("quiz").style.display = "block";

    document.getElementById("result").style.display = "none";

    showQuestion();
}

// Start quiz
showQuestion();
