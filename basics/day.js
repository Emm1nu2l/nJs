let day = 'Good morning all!'
console.log(`${day}`)
day = 'Have a wonderful experience today!!'
console.log(`${day}`)

// const notes = [{
//     title: 'My next goal',
//     body: 'Finish Javascript Bootcamp before the end of January'
// }, {
//     title: 'Habits to work on',
//     body: 'Bathing before 9am daily'
// }, {
//     title: 'Self Development',
//     body: 'be specific on the areas you wanna focus in, that is your area of specialisation'
// }]
// // console.log(notes)

// notes.splice(1, 0, {
//     title: 'Things to pay attention to',
//     body: 'Mental Transformation in all areas'
// })
// console.log(notes)
// notes.splice(1, 0, 'Nigeria will be a great nation')

// console.log(notes)
// notes[2] = {
//     title: 'Things to pay attention to',
//     body: 'Mental Transformation in all areas'
// }

// // console.log(notes.length)
// // console.log(notes.indexOf('Nigeria will be a great nation'))
// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Things to pay attention to'
// })
// console.log(index)
// console.log(notes.length)


// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3




//*************************************************

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// is equal to

var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
    return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3