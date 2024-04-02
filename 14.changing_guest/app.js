"use strict";
let names = ["Hamzah syed", "Daniyal nagori", "Zia khan ", "M.Qasim"];
for (let i = 0; i < names.length; i++) {
    console.log("Respected sir" + names[i] + '\n I will invite you tomorrow on lunch\n thankyou');
}
let absent = "M.Qasim";
let newMember = "Zeeshan Hanif";
names[3] = newMember;
for (let i = 0; i < names.length; i++) {
    console.log("Respected sir" + names[i] + '\n I will invite you tomorrow on lunch\n thankyou');
}
console.log("Sir " + absent, "is not coming on lunch");
