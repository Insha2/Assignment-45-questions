let guest_list: string[] = [`fahad` , `ali` , `hammad` ,`adil`];
for (let i=0; i<guest_list.length; i++ ){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.
    `);
}

let not_coming: string  = `fahad`;
let new_guest: string = `sami`;
guest_list[0] = new_guest ;
for (let i=0; i<guest_list.length; i++ ){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.
    `);
}

console.log(`Mr ${not_coming}, is not coming for dinner tomorrow.`);
    
