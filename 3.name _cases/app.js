"use strict";
let personName = "Ehsan";
//lowercase
console.log("lowercase:", personName.toLocaleLowerCase());
//UPPERCASE
console.log("UPPERCASE:", personName.toLocaleUpperCase());
//Titlecase
console.log("Titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
