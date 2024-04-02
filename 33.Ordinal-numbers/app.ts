/*ordinal numbers indicate their position in array ,such as 1st or 2nd.
most ordinal numbers end it in the except 1,2, and3
..store the number 1 through 9 in an array.
.. loop through the array
.. use an if else chain inside the loop to print the proper ordinal ending for each number .your output 
should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a seprate line */

let myNumbers=[1,2,3,4,5,6,7,8,9];
//for loop
for(let i =0; i<myNumbers.length;i++){
    //now use conditions
    if(myNumbers[i]==1){
        console.log(`${myNumbers[i]}st`);
        
    }
    else if(myNumbers[i]==2){
console.log(`${myNumbers[i]}nd`);

    }
    else if(myNumbers[i]==3){
        console.log(`${myNumbers[i]}rd`);
        
            }
            else if(myNumbers[i]>=4 && myNumbers[i] <=9){
                console.log(`${myNumbers[i]}th`);
                
                    }      
}