// function - input (argument), code, output (return value)
//function has (argument) and {a code block}
            // function (argument) {
            //     codeblock...
            // }

let greetUser = function () {
    console.log('welcome user')
}

greetUser ()

let square = function (num) {
    let result = num * num
    //console.log(result)
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


let convertFahrenheitToCelsius = function (tempFahrenheit) {
    let tempCelsius = (tempFahrenheit - 32) * 5 / 9
    return tempCelsius
}

let tempOne = convertFahrenheitToCelsius(68)
console.log(tempOne)
let tempTwo = convertFahrenheitToCelsius(32)
console.log(tempTwo)