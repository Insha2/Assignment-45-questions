var guest_list = ["fahad", "ali", "imran", "adil"];
//for (let i=0; i<guest_list.length; i++){
//console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.`);
//}
var not_coming = "fahad";
var new_guest = "amir";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n    "));
}
console.log("Mr ".concat(not_coming, " , is not coming for dinner tomorrow."));
guest_list.unshift("tariq");
guest_list.splice(guest_list.length / 2, 2, "abdullah");
guest_list.push("danish");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n    "));
}
console.log("we have found a bigger dinnner table so we have invited more guest");
