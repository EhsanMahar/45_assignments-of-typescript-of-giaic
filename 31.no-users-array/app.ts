// No users: Add an if test to exercise 30 to make sure the list of users is not empty.
// . if the list is empty print the message we need to find some users!
// .    remove all of the usernames from your array ,and make sure the correct message is printed.

let users=["Ehsan","Hamzah","Bbar","Sana","admin"]
if(users.length===0){
    console.log(" we need to find some users!");
    
}

// .    remove all of the usernames from your array ,and make sure the correct message is printed.
else{
    users=[];
    console.log("All users have been removed" +users.length);
    
}
