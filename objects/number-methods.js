let num = 103.946
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min )) + min

function makeGuess(guess) {
    console.log(guess === randomNum)        
}

makeGuess(2)

