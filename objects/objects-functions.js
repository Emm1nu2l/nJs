let myBook = {
    title: '1984',
    author: 'Geroge Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'The Missing Treasure',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(otherBookSummary.pageCountSummary)

let tempFahrenheit = 100
let tempFahrenheit2 = 74

let convertTemp = function (temp) {
    let toCelsius = 5 * (temp - 32) / 9
    let toKelvin = (5 * (temp - 32) / 9) + 273

    return {
        fahrenheit: `${temp}`,
        celsius: `${toCelsius}`,
        kelvin: `${toKelvin}`
    }
}

let temp1 = convertTemp(tempFahrenheit)
let temp2 = convertTemp(tempFahrenheit2)

console.log(temp1)
console.log(temp2)