var guest_list = ["fahad", "ali", "hammad", "adil"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n    "));
}
var not_coming = "fahad";
var new_guest = "sami";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n    "));
}
console.log("Mr ".concat(not_coming, ", is not coming for dinner tomorrow."));
