/*
* Author: Rebecca Slason
* Created: 24 October 2022
* Lisence: Public Domain
*/

// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name (in all lowercase letters) so I can sort it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // You can write the above lines as a single line:
  // userName.toLower().split("").sort().join("")
  return nameSorted;
}

// output
document.writeln("Okay. Here is your sorted your name: ",
  sortUserName(), "</br>");
