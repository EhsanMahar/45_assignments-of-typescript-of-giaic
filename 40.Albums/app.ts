//Album: Write a function called make album() that builds a object describing a music album.The function should take 
//in an artist  name and an album title , and it should return an object
// containing these two pieces of information.Use the function to make three dictionaries representing
//different albums. print each return value to show that objects are storing the album information correctly
//add an optional parameters to to make album() that allows you to store the number of tracks on an album.
//If the caling line includes a value for the number of tracks, add the value to the album's object.
// Make at least one new function call that the number of tracks on an album.

function myAlbum(artistName:string,albumtitle:string){
    return {artistName,albumtitle}
}
let album1=myAlbum("Ehsan","Jaan-e-jahan");
let album2=myAlbum("Ali Bhai","Ishq-murshid");
let album3=myAlbum("Abbas","Dil-lagi");

console.log(album1);
console.log(album2);
console.log(album3);

//Number of tracks
function myAlbum2(artistName:string,albumtitle:string,numberOfTracks?:number){
    return {artistName,albumtitle,numberOfTracks}
}
let album4=myAlbum2("Ismail","Ehd-e-wafa");
let album5=myAlbum2("Amir","Parizad");
let album6=myAlbum2("Farman","Mujhy prhna hai");
console.log(album4);
console.log(album5);
console.log(album6);
