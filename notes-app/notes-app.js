// DOM - Document Object Model

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

let notes = []

const filters = {
    searchText: ''
}

/******************************          LOCAL STORAGE INTRO    ****************************/

/**
 * To work with local data storage you have to be aware of the crud operation (create, read, update and delete)
 *  We are going to start with the create, to do this, we use localStorage.setItem('key', 'value')
 */
//To create
//   localStorage.setItem('location', 'California')
 //To read
//  console.log(localStorage.getItem('location'))
 //To updatek you are going to use setItem but with different values
 //To delete
 //localStorage.removeItem('location')
 // To clear all the data in localStorage
//  localStorage.clear()
//while removeItem works with a key, clear works for all the key hereby removing all their values
//Note: localStorage only support strings

//Supposing we wanna store an array of object into the data storage, what will happen!!!
//What we can do is to convert it to strings and later if need be convert the strings back to array
//So to do that we are gonna use JSON and there are two ways to do that the first is parse and the
//second is stringify. supposing we have an object user
// JSON = JavaScript Object Notation
// const user = {
//     name: 'Idowu Emmanuel Temiloluwa',
//     age: 22
// }

// stringify takes your object or array and return a string
//the output returns a string, in JSON, you have to use double quotes throughout, avoid single
// quote except when you are writing objects
// const userJSON = JSON.stringify(user)

// localStorage.setItem('user', userJSON)

// const viewUser = localStorage.getItem('user')
// console.log(viewUser)
//parse method takes a string and return an array.
// const user = JSON.parse(viewUser)
// console.log(`${user.name} is now ${user.age}`)

/**********************************   LOCAL STORAGE INTRO ENDS   *************************/

// Check for existing saved data

const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes,filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // console.log(filteredNotes)

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')

        if (note.title > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

// Query and remove
// const p = document.querySelector('p')
// p.remove() 
  
//remove() removes the tags. also, querySelector matches the first type
//but to get all you use querySelectorAll

// Query all and remove

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     p.textContent = '*********************'

//    // p.remove()
//    //console.log(p.textContent) //textContent is used to print the content of the html tag/type
// })

// Add a new element
/**
 * Create a new element
 * Give it some sort of text value
 * Then put it somewhere
 */

 const newParagraph = document.createElement('p')  //it can be newElement you get but since it's a paragraph, that's why i used newParagraph
 newParagraph.textContent = 'This is a new element from JavaScript'
//To add it to the list we have to use append child method to do that. Append Child adds the new item as the last items to the 
//element we are appending it  to. In this case it will be the <body>, it can also be <div>, <nav> and so on.
document.querySelector('body').appendChild(newParagraph)

//Using EventListener

document.querySelector('#create-note').addEventListener('click', function (event) {
    notes.push({
        title: '',
        body: ''
    })
    // console.log('Did this work?')
    /**
     * Using EventListener gives the access to do something with the element the event was really
     * fired on, just like the example below
     */
    // console.log(event)
    // event.target.textContent = 'The button was clicked'

    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)


})

/**
 * For instance, i have more than one element and i want to target them how do you that, see below
 */

//  document.querySelectorAll('button')[1].addEventListener('click', function (e) {
//      console.log('delete all notes')
//      e.target.textContent = 'delete all notes'
//  })

 //Note: if the arrangement of the buttons was changed, the program will misbehave, so for this to
 // to be avoided, let's look at better way of achieving the same result but with the maximum precaution
 // What is adviceable to do is to work is to use id for the html tags/elements. So that we call the
 // the tags even when there are several tag/element in the code and ID in HTML is assigned to just one
 // html element. see below
 // When using ID, for querySelector, use '#'. You can also use class but you use '.' instead of '#'

// document.querySelector('#remove-note').addEventListener('click', function (e) {
//     // console.log('delete all notes')
//     // e.target.textContent = 'delete all notes'
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// -- Single --
// p
// #replace
// .item

// -- Multiple --
// p#order
// button.inventory
// h1#title.application
// h1.application#title

/**
 * it's possible to use change as the eventlistener but for change the effect occurs when you click
 * after the textbox for result which is not what we want though giving a result similar to what
 * we expect but we want as the text is been typed it is changing immediately i mean for the
 * result and to achieve that eventlistener'input' will be the one fit for that immediate change.
 * Another thing that can help is placeholder but it will be in the html document 
 */

document.querySelector('#search-text').addEventListener('input', function (e) {
    // console.log(e.target.value) //Note: the 'e' stands for event
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

/**
 * 
 */

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})