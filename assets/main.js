var quizCard = $(".quiz-container")

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


var intervalId;

var correct = 0;
var incorrect = 0;
var timer = 30;
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
        quizCard.append("<h3>" + quiz[q].question + "</h3>");
        for (var a = 0; a < quiz[q].answer.length; a++) {
            quizCard.append("<input type='radio' name='question-" + a + "' value='" + quiz[q].answer[a] + "''>" + quiz[q].answer[a] + "<br>");
        }
    }
}
startGame();

function done() {
    $('input').on("click", function(){
        var inputs = quizCard.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === quiz[i].correct) {
        console.log($(inputs[i]).val())
        correct++;
        console.log(correct)
      } else {
        incorrect++;
        console.log(incorrect)
      }
    }
    })
    
}
done()
// $("input").on("click", function (event){
//     var checker = document.getElementsByName("quiz-");
//     for (i = 0; i < checker.length; i++){
//         if(checker[i].checked){
//             console.log(checker[i].value) 
//         } 
//     } 
// })
