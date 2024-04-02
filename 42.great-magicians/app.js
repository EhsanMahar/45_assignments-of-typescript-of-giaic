"use strict";
//great magicians: start with a copy your program from exercise 41. write a function called make_great() 
//that modifies the array of magicians by adding the phrase the great to each magicians name .call
// show_magicians() to see the list has actually beeen modified.
//define the function to show magicians names
let magicians = ["Ehsan", "Hamzah", "David"];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicians[i] = `the Great ` + magicianArry[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
make_great(magicians);
show_magician(magicians);
