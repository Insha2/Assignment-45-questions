let current_users: string[] = [`arif` ,`usama` , `umair` ,  `abid` , `waqas`]
let new_users: string[] = [`arif`]

new_users.forEach((new_users) =>{
if(
    current_users.some(
        (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    )
){
    console.log(`${new_users} will need to enter new user name`)
}


else{
    console.log(`${new_users} is available`)
}
}
)