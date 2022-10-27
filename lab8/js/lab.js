/*
* Author: Rebecca Slason
* Created: 26 October 2022
* Lisence: Public Domain
*/

var outputEl = document.getElementById("output");

function multiplyTwo(x){
    return (x * 2);
}

// test function
console.log("What is 10 times 2? ", multiplyTwo(10));
console.log("What is 43 times 2? ", multiplyTwo(43));

array = [121, 2, 65, 43, 27, 10292]
console.log("My array", array);

var result = array.map(multiplyTwo);
// should return [242, 4, 130, 86, 54, 20584]
console.log("Test of multiplying 2 of array:", result);

var result2 = array.map(function(x){
  return x + 200;
})

// should return [321, 202, 265, 243, 227, 10492]
console.log("Adding 200:", result2);

outputEl.innerHTML = "What is 10 times 2? " + multiplyTwo(10) + "<br>"+ "What is 43 times 2? " + multiplyTwo(43) + "<br>" + "My array" + array + "<br>"+ "Test of multiplying 2 of array:" + result + "<br>" + "Adding 200:" + result2;

// Task X:Bonus question 2
var userName = window.prompt("Please tell me your name.");
var outputEl = document.getElementById("output");

function greet(name, myFunction) {
    console.log('Welcome to my Lab 8 page.');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
    outputEl.innerHTML = "Welcome to my Lab 8 page." + "<br>" + 'Hello' + ' ' + name
}

// calling the function after 2 seconds
setTimeout(greet, 2000, userName, sayName);
