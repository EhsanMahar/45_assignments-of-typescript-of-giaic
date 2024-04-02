"use strict";
let car = "subaru";
let age = 25;
let number = [1, 2, 3, 4];
// **string **
//test 1: equality(true)
console.log("Is car =='subaru'? I predicted true");
console.log(car == "subaru"); //true (case-sensetive)
//test 2:strict  equality(false)
console.log("Is car ==='subaru'? I predicted false");
console.log(car === "subaru"); //false (case-sensetive)
//test 3: Inequality(true)
console.log("Is car !='subaru'?I predicted true");
console.log(car != "subaru"); //true 
//test 4: Inequality(false)
console.log("Is car !=='subaru'? I predicted false");
console.log(car !== "subaru"); //false (case-sensetive) 
// **lowercase function tests**
//test 5: lowercase conversion (true)
console.log("Is car.toLowercase()=='subaru'? I predicted true");
console.log(car.toLocaleLowerCase() == "subaru"); //true (converted to lowercase) 
//test 6: lowercase conversion (false)
console.log("Is car.toLowercase()=='subaru'? I predicted false");
console.log(car === car.toLocaleLowerCase()); //false (original value remain uppercase) 
// **Numerical tests **
//test 7: equality (true)
console.log("Is age ==25? I predicted true");
console.log(age == 25); //true
//test 8: Inequality (false)
console.log("Is age !=30? I predicted true");
console.log(age != 30); //true
//test 9: greater than (false)
console.log("Is age >30? I predicted false");
console.log(age > 30); //false
//test 10: leas than or equal (true)
console.log("Is age <=25? I predicted true");
console.log(age <= 25); //true
// ** Logical operator **
//test 11: AND(true)
console.log("Is age >20 && age <30?  I predicted true");
console.log(age > 20 && age < 30); //true (both conditions met )
//test 12: OR(false)
console.log("Is age >30 || age <18?  I predicted false");
console.log(age > 30 || age < 18); //false (neither conditions met )
// **Array Tests **
// test 13: In array (true)
console.log("is 3 in numbers? I precticted true.");
console.log(3 in number); //true (check fir index existence )
// test 14: Not In array (false)
console.log("is 5 not  in numbers? I precticted true.");
// console.log(5 not  in number); //true (negation of "in" operator )
