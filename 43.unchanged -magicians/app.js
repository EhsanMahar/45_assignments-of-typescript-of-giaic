"use strict";
//unchanged magicians: start with a  your program from exercise 42. write a function called make_great() 
//with a copy of the array of magician's names. because the original array will be unchanged return the new array
//and store it in a seprate array .Call show_magicians() with each array to show that you have one array of the original 
//names and one array with the great added to each magician's name.
let magicians = ["Ehsan", "Hamzah", "David"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = `the Great ` + magicianArry[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log(`\n\nThis is my original array`);
show_magician(magicians);
console.log(`\n\nThis is my modified copy of the array`);
show_magician(copyMagicianArray);
