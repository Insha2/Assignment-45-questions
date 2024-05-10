let animalPet: string[] = [`cat`, `dog` ,`cow`]

console.log(`Animals Name : \n`)
for(let i=0; i<animalPet.length;  i++ ){
    console.log(`${animalPet[i]}`)
}

for(let i=0; i<animalPet.length;  i++ ){
    console.log(`\nA ${animalPet[i].toLowerCase()} dog would make a great pet`)
}

console.log(`Any of these animals would make a great pet`)