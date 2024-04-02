//Sandwiches: write a function that accept an array of items a person wants on a sandwich.
//The function should have one parameter that collects many items as the function call
//provides , and it should print a summary if the sandwich that is being ordered. Call the
//function three times , using a different number of arguments of each time.

function make_sandwich(item:string[]){
    console.log(`\nMaking your sandwich with:`);
    item.forEach(element => console.log("- " +element));
    console.log(`Enjoy your sandwich ! \n`);
    
}
make_sandwich(["Ham","Cheese","Lettuce"]);
make_sandwich(["Turkey","Bacon"]);
make_sandwich(["Peanut","Butter","Jelly"]);

