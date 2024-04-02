"use strict";
let current_users = ["Ehsan", "Hamzah", "Fahad", "Ali ", "Amir"];
let new_users = ["zia", "Daniyal", "Ameen", "ismail", "admin"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is Availabe.`);
    }
});
