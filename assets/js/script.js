var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var startButton = document.querySelector(".start-button");
var choices = document.querySelector(".choices");
var startScreen= document.querySelector(".start-screen");
var quizStart= document.querySelector(".quiz-start");
var qTitle= document.querySelector(".qTitle");
var currentQuestion= 0;
var timerInterval;
var questions = [{
    questionTitle: "School Psychologists work in:",
    questionChoices: ["1.Schools", "2.Homes", "3.Target", "4.None of the above"],
    correctAnswer: "1.Schools",
}, {
    questionTitle: "Which of the following is a developmental disorder that affects verbal commnication, nonverbal commmunication, and social interactions.",
    questionChoices: ["1.Specific Learning Disability", "2.ADHD", "3.Autism Spectrum Disorder", "4.Dyslexia"],
    correctAnswer: "3.Autism Spectrum Disorder",
}, {
    questionTitle: "The following are presentations of ADHD except:",
    questionChoices: ["1.Predominately Inattentive Type", "2.Predominately Hyperactive/Impulsive Type", "3.Predominately Very Excitable Type", "4.Combined Type 4"],
    correctAnswer: "3.Predominately Very Excitable Type",
}, {
    questionTitle: "In order to qualify under the Other Health Impairment (OHI) eligbility a student must demonstrate limitations in the following areas except:",
    questionChoices: ["1.alertness", "2.character", "3.vitality", "4.strength"],
    correctAnswer: "2.character",
}, {
    questionTitle: "What does IEP stand for?",
    questionChoices: ["1.Individualized Education Program", "2.Indiviudal Dependency Plan", "3.Individualized Education Plan", "Impossible Education Problem"],
    correctAnswer: "1.Individualized Education Program",
}];
console.log(questions);

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}


function startGame() {
    setTime();
    startScreen.classList.add("hide");
    quizStart.classList.remove("hide");
    showQuestions()
}

function checkAnswer() {
    console.log(this.dataset.value);
    if (this.dataset.value === questions[currentQuestion].correctAnswer) {
        currentQuestion++;
    } else {
        secondsLeft= secondsLeft - 10;
    }
    if (secondsLeft <= 0 ||currentQuestion=== questions.length) {
        clearInterval(timerInterval);
    } else {
        showQuestions()
    }
}


function showQuestions() {
    qTitle.textContent= questions[currentQuestion].questionTitle;
    choices.textContent= "";
    for (let i= 0; i < questions[currentQuestion].questionChoices.length; i++) {
        var button= document.createElement("button");
        button.textContent= questions[currentQuestion].questionChoices[i];
        button.setAttribute("data-value", questions[currentQuestion].questionChoices[i])
        button.addEventListener("click", checkAnswer)
        choices.appendChild(button);
    }
}


startButton.addEventListener ("click", startGame);

