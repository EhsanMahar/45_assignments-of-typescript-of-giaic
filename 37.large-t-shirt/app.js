"use strict";
//large shirt:Modify  the make shirt()function so that shirts are large by default with a message that reads
//i love Typescript.Make large shhirt and a medium shirt with the default message,and a shirt of 
//any size with a different message.
function make_shirt(size = "large", message = "I Love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); //default large message
make_shirt("medium"); //default message, medium size
make_shirt("small", "Dive into coding"); //custom message,small size
