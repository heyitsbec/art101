/*
* Author: Rebecca Slason
* Created: 7 November 2022
* Lisence: Public Domain
*/

//three buttons for the three sections on index.html
$("#challengeDiv").append("<button id = 'challengeButtonEl'>Challenge Button");
$("#problemDiv").append("<button id = 'problemButtonEl'>Problem Button");
$("#resultDiv").append("<button id = 'resultButtonEl'>Result Button");

//event listeners for 3 buttons
$("#challengeButtonEl").click(function(){
  $("#challengeDiv").toggleClass("special");
});

$("#problemButtonEl").click(function(){
  $("#problemDiv").toggleClass("special");
});

$("#resultButtonEl").click(function(){
  $("#resultDiv").toggleClass("special");
});


//Task X code

//Header for Task X section
$(".bodyParagraphs").append("<h5>Task X</h5>");

//two new buttons
$(".sections").append("<button id = 'colorButton1'>Click me to change  the second button color!");

$(".sections").append("<br><br>");

$(".sections").append("<button id = 'colorButton2'>Click me to change the first button color!");

//event listeners for new buttons
$("#colorButton1").click(function(){
  $("#colorButton2").toggleClass("toggledButton");
});

$("#colorButton2").click(function(){
  $("#colorButton1").toggleClass("toggledButton");
});
