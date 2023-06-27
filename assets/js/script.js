var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var startButton = document.querySelector(".start-button");
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
    questionChoices: ["1.Individualized Education Program", "2.Indiviudal Dependency Environmental Assitance", "3.Individualized Education Plan", "choice 4"],
    correctAnswer: "1.Individualized Education Program",
}];

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function startGame() {
    setTime();
}

startButton.addEventListener ("click", startGame);

