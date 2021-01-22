// Multiple Arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default Arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}` // Using template string
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

let getTip = function (total = 0, tipPercent = 0.2) {
    let tip = tipPercent * 100
    let tipValue = tipPercent * total
    let amountToBePaid = total - tipValue
    // return 'Total: $' + total + ' - Tip percent: ' + tipPercent + ' - Tip Value: $' + tipValue + ' - Amount to be Paid: $' + amountToBePaid
    // return `Total: $${total} - Tip percent: ${tipPercent} - Tip Value: $${tipValue} - Amount to be Paid: $${amountToBePaid}` // Using template string
    return `A ${tip}% tip on $${total} would be $${tipValue}`
}

let Tip1 = getTip(1000000, 0.5)
let Tip2 = getTip(89000, .51)
let Tip3 = getTip(298000, .99)
let Tip4 = getTip()
let Tip5 = getTip(5500000)
let Tip6 = getTip(40000, .25)

console.log(Tip1)
console.log(Tip2)
console.log(Tip3)
console.log(Tip4)
console.log(Tip5)
console.log(Tip6)


let name = 'Idowu Emmanuel Temiloluwa'
let age = 24

console.log(`Hey, my name is ${name}!, I am ${age} years old`)