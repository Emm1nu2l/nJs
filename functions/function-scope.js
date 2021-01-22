// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
// Local scope (tempFahrenheit, tempCelsius)
// Local scope (isFreezing)

let convertFahrenheitToCelsius = function (tempFahrenheit) {
    let tempCelsius = (tempFahrenheit - 32) * 5 / 9

    if (tempCelsius <= 0) {
        let isFreezing = true
    }

    return tempCelsius
}

let tempOne = convertFahrenheitToCelsius(68)
console.log(tempOne)
let tempTwo = convertFahrenheitToCelsius(32)
console.log(tempTwo)