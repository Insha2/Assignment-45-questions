let guest_list: string[] = [`fahad` , `ali` , `imran` , `adil`];
//for (let i=0; i<guest_list.length; i++){
//console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.`);
//}

let not_coming: string = `fahad`;
let new_guest: string = `amir`;
guest_list[0] = new_guest ;
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.
    `);
}

console.log(`Mr ${not_coming} , is not coming for dinner tomorrow.`);

guest_list.unshift(`tariq`) ;
guest_list.splice(guest_list.length/2,2 ,`abdullah`);
guest_list.push(`danish`);
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.
    `);
}
console.log(`we have found a bigger dinnner table so we have invited more guest`);

 