// ARRAYS OF QUESTIONS AND ANSWERS

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
        question: "Who is the all time scoring leader in the NBA?",
        answers: ["Micheal Jordan", "Lebron James", "Kareem Abdul-Jabbar", "Wilt Chamberlin"],
        correct: "Kareem Abdul-Jabbar",
    },
    {
        question: "Which team has the most championships in the NBA?",
        answers: ["Boston Celtics", "LA Lakers", "San Antonio Spurs", "Golden States Warriors"],
        correct: "Boston Celtics",
    },
    {
        question: "Who is the first player to be drafted #1 without playing college or high school basketball in the U.S.?",
        answers: ["Joel Emib", "Yao Ming", "Tim Duncan", "Tony Parker"],
        correct: "Yao Ming",
    },
    {
        question: "Who is the shortest player of all-time?",
        answers: ["Spud Webb", "Allen Iverson", "Nate Robinson", "Tyrone Bogues"],
        correct: "Tyrone Bogues",
    },
    {
        question: "Most coaching titles?",
        answers: ["Phil Jackson", "Gregg Popovich", "Pat Reily", "Steve Kerr"],
        correct: "Phil Jackson",
    },
    {
        question: "What player has the highest career FT percentage?",
        answers: ["Steve Kerr", "Steve Nash", "Steph Curry", "Damion Lillard"],
        correct: "Steve Nash",
    },
    {
        question: "What player has the highest career PPG?",
        answers: ["Micheal Jordan", "Wilt Chamberlin", "Kobe Bryant", "James Harden"],
        correct: "Micheal Jordan",
    },
    {
        question: "Who has the most coaching wins?",
        answers: ["Phil Jackson", "Gregg Popovich", "Don Nelson", "Rick Adleman"],
        correct: "Don Nelson",
    },
]

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
        timer = setInterval(game.countdown, 1000);
        // creates the timer to the DOM, & setting id(counter)
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter'> 120 </span> Seconds </h2>")
        $('#start').remove();
        for (var q = 0; q < questions.length; q++) {
            $('#sub-wrapper').append("<h3>" + questions[q].question + "</h3>");
            for (var a = 0; a < questions[q].answers.length; a++) {
                $("#sub-wrapper").append("<input type ='radio' name ='question-" + q + "' value = '" + questions[q].answers[a] + "'>" + questions[q].answers[a]);
            }
        } // CREATES THE DONE BUTTON IN THE DOM
        $("#sub-wrapper").append("<br> <button id = 'done'> Done </button>");
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
        this.result(); // THE RESULT FUNCTION IS RAN HERE ONCE DONE BUTTON IS CLICK
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

// START BUTTON TO START THE GAME
$('#start').on('click', function () {
    game.start(); // THE GAME FUNCTION IS RAN HERE
});

// DONE - TO FINISH THE GAME
$(document).on('click', "#done", function () {
    game.done();
});





