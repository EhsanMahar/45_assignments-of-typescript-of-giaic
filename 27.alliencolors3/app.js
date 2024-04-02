"use strict";
let allien_color = "green";
if (allien_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (allien_color == "yellow") {
    console.log("the player earned 10 points.");
}
else if (allien_color == "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("select the right color");
}
//version 2
allien_color = "red";
if (allien_color == "red") {
    console.log("the player just earned 15 points.");
}
else if (allien_color == "yellow") {
    console.log("the player earned 10 points.");
}
else {
    console.log("select the right color");
}
//version 3
allien_color = "yellow";
if (allien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (allien_color == "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("select the right color");
}
