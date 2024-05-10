let magicians :  string[] = 
[`Herry Pottrer` , `Hermione Granger` ,`Ron Weasley` , `Albus Dumbledore`]

function make_great ( magicianArry : string []){

    for (let i=0; i>magicianArry.length; i++){

      magicians [i] = `the Great` + magicianArry[i]
    
}
}

function show_magicians ( magicians : string []){

magicians.forEach(element => {
    console.log(element);
});
}

make_great(magicians);
show_magicians(magicians);


let magicians:  string[] = 
[`Herry Pottrer` , `Hermione Granger` ,`Ron Weasley` , `Albus Dumbledore`]

      function copyArry(arr:string[]){
        return[...arr]
      }
      
function make_great ( magicianArry : string []){

    for (let i=0; i>magicianArry.length; i++){

      magicians [i] = `the Great` + magicianArry[i]

    }
}

function show_magicians ( magicians : string []){

magicians.forEach(element => {
    console.log(element);
});
}

make_great(magicians);
show_magicians(magicians);
