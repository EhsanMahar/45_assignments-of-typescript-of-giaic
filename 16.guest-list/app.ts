let list=["Ehsan","Ali","Abbas","Amir","Ismail"];
let absent="Ehsan";
let new_guest="Farman";
list[1]=new_guest;

list.unshift("Ehsan","Ali");
console.log("\niam sorry i cant arrange big table:");
while(list.length){
    let remove_guest=list.pop();
    console.log(`sorry sir/madam ${remove_guest} you are not invited`);
    
}
for(let i=0; i<=list.length;i++){
    console.log(`Respected sir/madam`+list[i]+`\n \you ar invited`);
    
}
list.splice(0,2)
console.log(list);
