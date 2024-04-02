let car="saburu";
//Test 1: equality comparisonm(true)

console.log("is car =='subaru'? I predicted true");
console.log(car =='saburu'); //true

//Test 2: strictequality comparison (true)
console.log("is car ==='subaru'? I predicted true");
console.log(car ==='saburu'); //true


//test 3: inequality comparison (false)
console.log("is car !='subaru'? I predicted true");
console.log(car !='saburu'); //false

// test 4:strict inequality comparison (false)
console.log("is car !=='subaru'? I predicted true");
console.log(car !=='saburu'); //false


//test 5: less than comparison (false)
console.log("is car < 'subaru'? I predicted true");
console.log(car < 'saburu'); //false

//test 6: greater than comparison (false)
console.log("is car > 'subaru'? I predicted true");
console.log(car > 'saburu'); //false

//test 7:less  than  or equal to comparison (true)
console.log("is car <= 'subaru'? I predicted true");
console.log(car <= 'saburu'); //true

//test 8: greater than or equal to  comparison (true)
console.log("is car >= 'subaru'? I predicted true");
console.log(car >= 'saburu'); //true


//test 9: checkinng truthiness (true)
console.log("is car ? 'subaru'? I predicted true");
console.log(car); //true (non-empty string is truthly)




//test 10: checkinng falsiness (false)
console.log("is car ? 'subaru'? I predicted true");
console.log(!car); //false (negation of a truthly  value)

