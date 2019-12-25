var quizCard = $(".quiz-area")

var questions = [
    {
        question: "How many teams are there in the NBA?",
        answers: ["25", "30", "32", "28"],
        correct: "30",
    },
    {
        question: "What is the Sacramento Kings mascot?",
        answers: ["Cat", "Gorilla", "Lion", "Thunderman"],
        correct: "Lion",
    },
    {
        question: "Who is the all time scroing leader in the NBA?",
        answers: ["Micheal Jordan", "Lebron James", "Kareem Abdul-Jabbar", "Wilt Chamberlin"],
        correct: "Kareem Abdul-Jabbar",
    },
    {
        question: "Which team has the most championships in the NBA?",
        answers: ["Boston Celtics", "LA Lakers", "San Antonio Spurs", "Golden States Warriors"],
        correct: "Boston Celtics",
    },
]


var intervalId;


// // TIMER
// function start() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }
// function decrement() {
//     timer--;
//     $('.timer').text(timer)
//     if (timer === 0) {
//         stop();
//     }
// }
// decrement();
// function stop() {
//     clearInterval(intervalId);
// };
// start()


$('#start').on('click', function () {
    game.start();
});
// holds the set interval
var timer;
// creates the game
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        // appends the counter onto the html
        // created a counter to the DOM
        $("#counter").html(game.counter);
        // ends the game if time is up
        if (game.counter === 0) {
            console.log("Times Up!!!");
            game.done();
        }
    }, // function to start the game
    start: function () {
        // creating a timer
        timer = setInterval(game.countdown, 100);
        // creates the timer to the DOM, & setting id(counter)
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter'> 120 </span> Seconds </h2>")
        $('#start').remove();
        for (var q = 0; q < questions.length; q++) {
            $('#sub-wrapper').append("<h3>" + questions[q].question + "</h3>");
            for (var a = 0; a < questions[q].answers.length; a++) {
                $("#sub-wrapper").append("<input type ='radio' name ='question-" + q + "' value = '" + questions[q].answers[a] + "'>" + questions[q].answers[a]);
            }
        }
        $("#sub-wrapper").append("<button id = 'done'> Done </button>");
    }, // done function to check each value of the checked input
    done: function () {
        var inputs = $("#sub-wrapper").children("input:checked");
        // loops through the inputs to check each checked value
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correct) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },
    result: function () {
        clearInterval(timer);
        // removes the h2 timer in the html
        $("#sub-wrapper h2").remove();
        // appends the result to the DOM
        $("#sub-wrapper").html("<h3> All Done!!!</h3>");
        $("#sub-wrapper").append("<h3> Correct Answers: " + this.correct + "</h3>")
        $("#sub-wrapper").append("<h3> Incorrect Answers: " + this.incorrect + "</h3>")
    }
};
// clicks on done button to finish the game
$(document).on('click', "#done", function () {
    game.done();
});





