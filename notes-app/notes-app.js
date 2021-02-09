// DOM - Document Object Model

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