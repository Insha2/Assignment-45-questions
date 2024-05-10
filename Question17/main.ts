let guest_list: string[] = [`fahad` ,`ali` , `abid` , `umair`];
//for(let i=0; i<guest_list.length; i++){
//  console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.`
//);
//}

let not_coming: string = `fahad`;
let new_guest: string = `ubaid`;
guest_list[0] = new_guest ;
//for(let i=0; i<guest_list.length; i++){
//  console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.`
//);
//}

console.log(`Mr ${not_coming} , is not coming for dinner tomorrow`);

guest_list.unshift(`amir`);
guest_list.splice(guest_list.length/2, 2, `adil`);
guest_list.push(`mazhar`);
// for (let i=0; i<guest_list.length; i++){
// console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.`
 //`);
 //}

console.log(`\n\nUnfortunately we are out of space, we have space for only two guest only.\n\n`);
 while(guest_list.length>2){
     let removed_guest = guest_list.pop();
    console.log(`Sorry , Dear ${removed_guest} You are not invited for dinner tomorrow.
    `);
 }
for(let i=0; i<guest_list.length; i++){
    console.log (`Dear ${guest_list[i]}\n\nYou are still invited for a dinner tomorrow.\n\nThank you.
    `);
}

guest_list.splice(0,2);
console.log(guest_list);




