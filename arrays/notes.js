// const notes = ['notes 1', 'notes 2', 'notes 3']
//Note contains of different things apart from strings, so we are making it an object, because
//it has title, body, day created and day modified.
const notes = [{
    title: 'My next goal',
    body: 'Finish Javascript Bootcamp before the end of January'
}, {
    title: 'Habits to work on',
    body: 'Bathing before 9am daily'
}, {
    title: 'Self Development',
    body: 'be specific on the areas you wanna focus in, that is your area of specialisation'
}]
// console.log(notes)
// console.log(notes.length)
// console.log(notes[notes.length - 0])
// let reveal = notes.pop() //pop method is used to remove one item from the array list from the end
// console.log(reveal)
// notes.push('I need to go to Iranodu')//push method is used to add to the existing array list from the end
// console.log(notes)
// notes.shift() // shift method is just like pop but it is from the beginning not end
// notes.unshift('I have to take breakfast') //unshift is like push but at the beginning not end
// console.log(notes)
//splice is used in either adding or deleting from a particular index
//it takes two argument when deleting with first arg indicating where the removal 
// should start from, while the second says in quantity how many items to remove.
// but to add, you use 3 arguments, the second should be in 0 to do nothing and the third
// should contain what you want to add to the list.
// notes.splice(1, 1) 
// // notes.splice(1, 2, 'New Discovery', 'New Discovery') //Multiple replacement
// // console.log(notes) 
notes.splice(1, 0, {
    title: 'Things to pay attention to',
    body: 'Mental Transformation in all areas'
})

//Looping over Array,


//this means performing a particular action for each of the list in the array
//for example if we want to start printing out their content, instead of writing the code individually
//we can just use the 'forEach' method to achieve that, and it will be repeated for all the list in the array
//that is if we have 3 items in the array, it will repeated thrice and if 
// it is 25 items, then it will repeated 25 times.
//This can be done in two ways
//the first way

// function dothis () {

// }
// notes.forEach(dothis)

//      or the second way

// notes.forEach(function (item) {
//     console.log('testing 123')
//     console.log(item)
// })

//The above operation is like passing a function into function which in
// javascript is called 'Callback Function', you ask how?
//you will notice that we are not calling the function directly 
//                         function () {

//                         }
// instead 
// we passed into the forEach function
                            // forEach(function () {

                            // })
//and as the forEach function is called,
//the function is called too indirectly.
//Also we have two arguments (item, index)
//also this grants us access into every item in the array as well as their respective index
//and this is one of the most commonly used array

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

//another one we can use is the For loop, the diff is forEach requires array data
//but for loop doesn't, it is so flexible to mess with
//You know the looping of forEach depends on the number of array data, so supposing you need to
//print the top three player score in your game or trying to count to a specific number let's say to 1000
//does that mean you must have 1000 array data or 1000 console.log statements?, that is alot stressful, that is why you have the
// for loop available with so much flexibility in it, to do this, you need to start with 
//'for' reserved keyword followed by brackets '()' then the parenthesis '{}'. Also inside the bracket there are three things that must be provided
//first, the intializer, second, the condition and third, the final expression. These are specified in the bracket and seperated using the semi-colon(;)
// 

// //Counting....1
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// //To do something for each item in the array
// for (let count = 0; count < notes.length; count++) {
//     console.log(count)
//     console.log(notes[count])
// }
// //when we use the for loop, the count becomes the index and then we use
// //the bracket notation to grab the item by its index from the array.

// //To do this in reverse
// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(count)
//     console.log(notes[count])
// }

// console.log(notes.length)

//Since we are dealing with array data then it's preferably to use forEach as for loop is used when
//there is no array data

//How to search through an array.
//this is done using indexOf method which eventually returns the index number if it exist or -1 if it doesn't exist,
//it is case sensitive
//It can be used to find an item you are not sure of; either to delete it or do some other action

// console.log(notes.indexOf('Nigeria will be a great nation'))

//Now everything we've been doing is of an array of strings but let's see how changing to an array of 
//objects will affects the behaviours and everything we've been doing since
//When we're comparing two objects it does not matter if they have the same
//set of object properties and the same object property values. It does not make 
//them equal, what makes two objects equal is if they're exact same object in memory. like this

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)

// //but this is not equal
// let object1 = {}
// let object2 = {}
// console.log(object1 === object2)

//hence for array of objects, we are going to use 'findIndex' method instead of 'indexOf', because of 
//flexibility, this findIndex method is related to forEach method which means it is a callback function
//and its operation will be demonstrated below

// const index = notes.findIndex(function (note, index) {
//     console.log(note)                                    //These code is not reusable
//     return note.title === 'Things to pay attention to'
// })
// console.log(index)

//The goal of findIndex is to actually find the index and unlike forEach 
//it has a meaningful return value
//Note: with findIndex, we return either true or false\

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    }) 
    return notes[index]
}

const note = findNote(notes, 'things to pay attention to')
console.log(note)