let car: string =`subaru`;
let age: number = 20;
let numbers:  number[] = [ 3 , 6 , 9 , 12 , 15] ;

//'''string test '''
//True test
console.log(`Is a car == saburu ? I predict  True.`)
console.log( car = `saburu`) ;//True

//False test
console.log(`Is a car != saburu ? I predict False.`)
console.log( car  != `saburu`) ;//False

//'''' lower case function test ''''

//True test
console.log(`Is a car.tolowercase () == saburu ? I predict True.`)
console.log( car.toLowerCase() == `saburu`) ;//True

//False test
console.log(`Is a car.tolowercase () == toyota ? I predict False.`)
console.log( car.toLowerCase() == `toyota`) ;//False

//''''numerical test''''
//equality and inequality 
console.log(`Is age = = 20 ? I predict  True.`)
console.log(age == 20 ) ;//True

console.log(`Is age ! = 25 ? I predict  True.`)
console.log(age != 25 ) ;//True

//Greator than and less than
console.log(`Is age > 18 ? I predict  True.`)
console.log(age > 18 ) ;//True

console.log(`Is age < 18 ? I predict  False.`)
console.log(age < 18 ) ;//False

//Greator than or equal to and less than equal to
console.log(`Is age >= 18 ? I predict  True.`)
console.log(age >= 18 ) ;//True

console.log(`Is age <=  18 ? I predict  False.`)
console.log(age <=  18 ) ;//False

//'''AND OR OPERATOR TEST'''

//True test with "and" operator 
console.log(`Is 10 < age < 25 ? I predict  True.`)
console.log(age < 25 && age > 10 ) ;//True

//False test with "or" operator
console.log(`Is age > 5 or age < 15 ? I predict  False.`)
console.log(age > 20  ||  age <  15 ) ;//False

//test wheter is in array

//True test
console.log(`Is 3 in numbers ? I predict True.`)
console.log( 3 in numbers);//True

//False test
console.log(`Is 7 in numbers ? I predict False.`)
console.log( 7 in numbers);//False









