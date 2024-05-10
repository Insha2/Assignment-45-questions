let sizeofshirt: string[] = [`small`, `medium`, `large`]
let shirt1 =`This shirt is for casual wearing`
let shirt2 =`This shirt is for casual wearing`
let shirt3 =`This shirt is for casual wearing`

function make_tshirt() {
    let simpleFunction = `This is a ${sizeofshirt[0] } shirt ,and ${shirt1}`
    console.log(simpleFunction)
    return simpleFunction
}

let response = make_tshirt()
console.log(response)
