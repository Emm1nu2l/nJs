// DOM - Document Object Model

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

// Query and remove
// const p = document.querySelector('p')
// p.remove() 

//remove() removes the tags. also, querySelector matches the first type
//but to get all you use querySelectorAll

// Query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    p.textContent = '*********************'

   // p.remove()
   //console.log(p.textContent) //textContent is used to print the content of the html tag/type
})

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