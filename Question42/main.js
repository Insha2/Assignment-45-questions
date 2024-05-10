var magicians = ["Herry Pottrer", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function make_great(magicianArry) {
    for (var i = 0; i > magicianArry.length; i++) {
        magicians[i] = "the Great" + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
