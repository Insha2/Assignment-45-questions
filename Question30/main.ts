let users: string[] = [ `ali` ,`abid` , `adil` ,`fahad`, `admin`]

for(let user of users)
if (user === `admin`){
    console.log(`Hello admin , would you like to use astatus report ?`)
}
else {
    console.log(`Hello ${user} , thank you for loging again.`)
}