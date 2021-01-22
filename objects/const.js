let isRaining = true

isRaining = false

console.log(isRaining)

//the above is the normal way discussed in the first way
// the second way is using const but that is for constant
// the diff btw let and const is that const value is unchangeable

const isDrizzling = true

//isDrizzling = false if this appear in code, an error message is what you get

console.log(isDrizzling)

const person = {
    age: 27
}

person.age = 28 // this is valid because we are trying to manipulate the property of person.
//person = {}// this is invalid because the const is attached to person

//using let or const for variable helps in better understanding of the program's functionality
// and easier means of code readability.