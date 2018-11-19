var amountCorrect = 0;
var amountWrong = 0;
var time = 1000;

var userChoice;

var queryURL;
var APIkey;


function intro() {

    console.log("Intro");

    $("#questions").html('<h6>Welcome, In this game, You will be presented with a small portion of a song and your goal is to guess the next couple of lyrics. Good Luck</h6>');

}

function nextFunction(array) {

}

function giphyInsert() { //we fill it in later when we get the first question to work

}

function result() { //just formats the page to show a "results" screen
    
    console.log("Result")
    $("#buttons").html("");
    $(".timer").html(""); 

    $(".Correct").text("Your amount correct: " + amountCorrect);
    $(".Wrong").text("Your amount wrong: " + amountWrong);
    $("#questions").html('<h2>Congratulations, You got through the little quiz! Here are your results!</h2>');
}

function question1() {
    
    timer();
    console.log("question 1");
    $("#questions").html('<h2>"Do You Remeber? The..."</h2>');
    var ans1 = $("#pot-ans-1").html("<p>21st Night of September...</p>");
    var ans2 = $("#pot-ans-2").html("<p>The Way...</p>");
    var ans3 = $("#pot-ans-3").html("<p>How the stars stole the night away...</p>");
    var ans4 = $("#pot-ans-4").html("<p>My thoughts are with you...</p>");

    correctAnswer = ans1; //equal to the actual html

    $("#pot-ans-1").on("click", function () {
        userChoice = ans1;
        amountCorrect++;
        clearTimeout(timer, 1000)

    });

    $("#pot-ans-2").on("click", function () {
        userChoice = ans2;
        amountWrong++;
        clearTimeout(timer, 1000)

    });

    $("#pot-ans-3").on("click", function () {
        userChoice = ans3;
        amountWrong++;
        clearTimeout(timer, 1000)

    });

    $("#pot-ans-4").on("click", function () {
        userChoice = ans4;
        amountWrong++;
        clearTimeout(timer, 1000)

    });

};

function question2() {
    console.log("Question 2");

}

function question3() {
    console.log("Question 3");

}

function question4() {
    console.log("Question 4");

}

function question5() {
    console.log("Question 5");

}

function question6() {
    console.log("Question 6");

}

function question7() {
    console.log("Question 7");

}

function question8() {
    console.log("Question 8");

}

function timer() {
    
    var the_timer = setTimeout(function () {

        time--; //its a countdown so we are looking for decerements specifically

        var secs = time % 10;

        document.getElementById("timer").innerHTML = secs;

        timer();
        
        if (secs === 0) {

            time = 100;
            $("#timer").html("10");
            alert("Next Question");

            clearTimeout(timer, 1000)
        };

    }, 1000);
}


$(document).ready(function () { //so as of right now, we got the function to run with timer, problem:
    
    

}) 

// try making all the functions have a ten second timer and put the functions under another timeout within the ready function
// making a the function run for the full 100 seconds. 

// You could do that or you could somehow manage to revert back to the original way run the timer for the quiz as a whole. 
// stupid fucking timer interval shit wont work.
// need to check on youtube how to properly use such and such with functions. and see the types of tricks you can pull off.