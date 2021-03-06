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
//the function is called too indirectly. Hence forEach has a function as its argument
//the function passed into forEach has two arguments (item, index)
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
//having a function as its argument and its operation will be demonstrated below

// const index = notes.findIndex(function (note, index) {  //note is the name of the items in the notes
//     console.log(note)                                    //These code is not reusable
//     return note.title === 'Things to pay attention to'
// })
// console.log(index)

//The goal of findIndex is to actually find the index and unlike forEach 
//it has a meaningful return value
//Note: with findIndex, we return either true or false\

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     }) 
//     return notes[index]
// }

//in the above method we used findIndex method, there is actually another method in JS MDN that does the
//same thing and makes it easier for us and that is the find method
//Note: the call signature of findIndex method and find method are identical
//the difference is find does not return the index of the found element just like findIndex rather it
//find method returns the found elements itself, so converting the above findIndex method to find
//we have

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }
//also just like findIndex method, find method returns undefined if the element is not found.
//If you are looking for an element, use find method
//If you are looking for the index of a found element, use findIndex method
//

// const note = findNote(notes, 'things to pay attention to')
// console.log(note)

/*****
 * what happens if we want to edit a note and we don't know the exact title of the item/note and the only thing we can remember
 * is a word that is included in one of the lines in the note, how do we get that note to edit or delete or maybe in a mailbox, 
 * in your inbox, you are looking for a mail that has a particular included, how do you get it out, that means we have to filter 
 * the inbox using that mail in which all the mail having that will be used to create a new array different from the array of the 
 * the inbox. This concept is called filterate
 */

// const filteredNotes = notes.filter(function (note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes('he')
//     const isBodyMatch = note.body.toLowerCase().includes('he')
//     return isTitleMatch || isBodyMatch
// })

// console.log(filteredNotes)

/**the above code is not reusable, so inorder to make it reusable, we need to make it a function */

// const findNotes = function (notes, query) {
//     return notes.filter(function (note, index) {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes(notes, 'HABIT'))

/***************************SORTING ARRAY
 * Assume we want the notes to be arranged in alphabetical order or by titles what shall we do,
 * this is called sorting. The same thing can be said if we want our completed todo to come first
 * before the uncompleted ones. Sort method on a norms try to do things on its own like indexOf but
 * it accepts functions which happen to help in specifying the exact data needed that is it takes a 
 * CompareFunction,
 * 
 * If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:
 *
 * If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
 * If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAScript standard only started guaranteeing this behavior in 2019, thus, older browsers may not respect this.
 * If compareFunction(a, b) returns greater than 0, leave a and b unchanged. This means b comes first.
 * compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
 * 
 *  you can check array sort mdn for better explanation 
 */

 const sortNotes = function (notes) {
     notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
     })
 }

 sortNotes(notes)
 console.log(notes)