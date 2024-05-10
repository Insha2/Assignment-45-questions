var animalPet = ["cat", "dog", "cow"];
console.log("Animals Name : \n");
for (var i = 0; i < animalPet.length; i++) {
    console.log("".concat(animalPet[i]));
}
for (var i = 0; i < animalPet.length; i++) {
    console.log("\nA ".concat(animalPet[i].toLowerCase(), " dog would make a great pet"));
}
console.log("Any of these animals would make a great pet");
