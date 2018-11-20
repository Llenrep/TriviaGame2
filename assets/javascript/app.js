var amountCorrect = 0;
var amountWrong = 0;
var time = 100;

var userChoice;

var queryURL;
var APIkey;

var running = true;


function giphyInsert() { //we fill it in later when we get the first question to work

}


function question1() {
    console.log("Question 1");

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
    
    if (running === true){
    var the_timer = setTimeout(function () {

        time--; //its a countdown so we are looking for decerements specifically

        var secs = (time)

        document.getElementById("timer").innerHTML = "Time Left: " + secs

        timer();
        
        if (secs === 0) {

            running = false;

            time = 100;

            alert("Times up!");

            // clearTimeout(timer(), 100000)
        };
        
    }, 1000);
    }
}

function result() { //just formats the page to show a "results" screen
    running = false;
    console.log("Result")
    $("#buttons").html("");
    $(".timer").html(""); 

    $(".Correct").text("Your amount correct: " + amountCorrect);
    $(".Wrong").text("Your amount wrong: " + amountWrong);
    $("#questions").html('<h2>Congratulations, You got through the little quiz! Here are your results!</h2>');
}


$(document).ready(function () { // where are the functions will be run with specific rules and order.... I guess....
    
        var type1 = document.getElementsByName("inlineRadio1Options");
        console.log(type1[0])
        var type2 = document.getElementsByName("inlineRadio2Options");
        console.log(type2[1])
        var type3 = document.getElementsByName("inlineRadio3Options");
        console.log(type3[0])
        var type4 = document.getElementsByName("inlineRadio4Options");
        console.log(type4[2])
        var type5 = document.getElementsByName("inlineRadio5Options");
        console.log(type5[3])
        var type6 = document.getElementsByName("inlineRadio6Options");
        console.log(type6[1])
        var type7 = document.getElementsByName("inlineRadio7Options");
        console.log(type7[3])
        var type8 = document.getElementsByName("inlineRadio8Options");
        console.log(type8[1])
        
    

    timer();

    if (running === false) {
        result();
        $("#actualQuestions").empty()
        $("#timer").empty()
    };

    $("#finished").on("click", function(){
        running = false;
        result();
        $("#actualQuestions").empty()
        $("#timer").empty()
    
    })

}) 
