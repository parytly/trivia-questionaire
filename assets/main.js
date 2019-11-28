var quiz = [
    {
        question: "How many teams are there in the NBA?",
        answer: ["25", "30", "32", "28"],
        correct: "30",
    },
    {
        question: "What is the Sacramento Kings mascot?",
        answer: ["Cat", "Gorilla", "Lion", "Thunderman"],
        correct: "Lion",
    },
    {
        question: "Who is the all time scroing leader in the NBA?",
        answer: ["Micheal Jordan", "Lebron James", "Kareem Abdul-Jabbar", "Wilt Chamberlin"],
        correct: "Kareem Abdul-Jabbar",
    },
    {
        question: "Which team has the most championships in the NBA?",
        answer: ["Boston Celtics", "LA Lakers", "San Antonio Spurs", "Golden States Warriors"],
        correct: "Boston Celtics",
    },
]

var timer = 30;
var intervalId;

var correct = 0;
var incorrect = 0;

// TIMER
function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    timer--;
    $('.timer').text(timer)
    if (timer === 0) {
        stop();
    }
}
decrement();
function stop() {
    clearInterval(intervalId);
};
start()

// APPENDS THE QUIZ
function startGame() {
    // LOOPS THROUGH QUESTIONS
    for (var q = 0; q < quiz.length; q++) {
        console.log(quiz[q].question)
        var quizQuestion = document.createElement('h3');
        quizQuestion.append(quiz[q].question)
        document.querySelector('.quiz-container').append(quizQuestion)
        for (var a = 0; a < quiz[q].answer.length; a++) {
            // console.log(quiz[q].answer[a])
            var quizAnswers = document.createElement("input");
            quizAnswers.setAttribute("type", "radio");
            quizAnswers.setAttribute("name", "quiz-" + q);
            quizAnswers.setAttribute("value", quiz[q].answer[a]);
            quizAnswers.setAttribute("class", "answerss");
            var answerBreak = document.createElement('br')

            document.querySelector('.quiz-container').append(quizAnswers)
            document.querySelector('.quiz-container').append(quiz[q].answer[a])
            document.querySelector('.quiz-container').append(answerBreak)
        }
    }
}
startGame();

var yo = document.getElementsByClassName("answerss").value;
console.log(yo)

// function done() {
//     var input = $('input').children("input:checked");
//     console.log(input)
//     for (var d = 0; d < input.length; d++) {
//         if ($(input[i]).val() === quiz[q].correct) {
//             correct++;
//             console.log(input)
//         } else {
//             incorrect++;
//         }
//     }
// }
// done()
