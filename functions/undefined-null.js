// Undefined for variable i.e when a value has not been assigned to a variable

let name
name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments i.e when an arguments is not provided 
// in a function or when you try to do something with the return value

let square = function (num) {
    console.log(num)
}

//square()

// Undefined as the function return default value
let result = square()
console.log(result)

// Undefined is used to reset user's info provided
// For instance while filling an e-form then suddenly wants to reset to default
// Now to know if the action has been done by user or developer is unpredictable when we
// assign undefined to the variable, so instead in javascript you can use null to denote 
// developer's action
let age = 27

//age = undefined // this will reset the user's age, allowing it to input another age
  
age = null

console.log(age)

