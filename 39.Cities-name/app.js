"use strict";
//City names: Write a function called city country() that takes in the name of a city 
// and its country .The function should return a string formatted like this:
//"Lahore, Pakistan"
//call your function with at least three city-country paris,and print the value that's returned.
function city_country(city, country) {
    //return "${city},${country}"
    console.log(`"${city},${country}"`);
}
city_country("Karachi", "Pakistan");
let mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Newyork", "America"));
console.log(city_country("Sydney", "Australia"));
console.log(city_country("New-delhi", "India"));
console.log(city_country("Islamabad", "Pakistan"));
