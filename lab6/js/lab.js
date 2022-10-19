/*
* Author: Rebecca Slason
* Created: 18 October 2022
* Lisence: Public Domain
*/

// Define Variables
myTransport = ["Chevy Cruze", "bus", "walking", "ride from partner", "bike"];

myMainRide = {
  make: "Chevy",
  model : "Cruze",
  color : "White",
  year : 2017,
  age: function() {
    return 2022 - age;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
