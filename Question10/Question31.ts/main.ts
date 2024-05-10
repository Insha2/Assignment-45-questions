//No users: Add an if test to Exercise 30 to make sure the list of users is not 
//empty.
//.If the list is empty ,print the message we need to find some users!

//.Remove all of your usernames from your array ,and make sure the correct message is printed.

let user: string[] = [`abid` ,`usama` , `ubaid` ,`adil` ,`bilal`]

if (user.length > 0){
    console.log(`We have enough users`)
}
else{
    console.log(`We need to find some users!`)
}