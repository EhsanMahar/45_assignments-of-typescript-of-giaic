"use strict";
// Hello admin: Make an array of five or more uusermanes , including the names 'admin'
// Imagine you are writing code that will print a greeting to each user
//after log in to a website. Loop through the array , and print a greeting to each user:
// . if the username is 'admin' , print a special greeting, such as hello admin
//would you like to see a status report?
//. otherwise print a generic greeting , such as hello eric, thank you for
// logging in again
let users = ["Ehsan", "Hamzah", "Bbar", "Sana", "admin"];
for (let user of users)
    if (user === "admin") {
        console.log("hello admin,would you like to see a status report? ");
    }
    else {
        console.log(`Hello ${user}, "thank you for logging in again."`);
    }
