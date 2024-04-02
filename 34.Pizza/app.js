"use strict";
/*
pizzas:
Think of at least three kinds of your favourite pizza. store these pizza names in array ,and then use a for loop to print the names of each pizza.
.Modify your for loop to print a sentence using the names of pizza instead of
printing just the name of the pizza for each pizza you should have one line output
containing a simple statement like i like pepperoni pizza
.Add a line at the end of your program ooutside the for loop .that states how much
you like a pizza ,the output should consist of three or more lines about the kind of pizza
you like and then an additional sentence such as i really love pizza.

*/
let pizza = ["Cheez pizza", "pepperoni pizza", "vegeterian pizza"];
//print only names of pizza 
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
//printing names and sentence/message
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like to eat ${pizza[i]}`);
}
console.log("\nI like to eat pizza b/c pizza has a variety flavour of pizza");
