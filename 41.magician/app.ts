//Magicians: display magician names from an array
let magicians:string[]=["Ehsan","Hamzah","David"];
function show_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
        
    });
}
show_magician(magicians);