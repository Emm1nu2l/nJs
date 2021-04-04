// 1. Delete dummy data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

/**
 * 
 */

const todos = getSavedTodos()

// const todos = [{
//     text: 'Order cat food',
//     completed: false3
// }, {
//     text: 'Clean kitchen',
//     completed: !false
// }, {
//     text: 'Buy food',
//     completed: false
// }, {
//     text: 'Do work',
//     completed: true
// }]

// todos.splice(2, 0, {
//     text: 'Do rehearsal or Exercise the body',
//     completed: true
// },{
//     text: 'Apply for Gateway Polytechnic Form',
//     completed: false
// })
    
    // todos.splice(2, 0, {
    //     text: 'Do rehearsal or Exercise the body',
    //     completed: true
    // },{
    //     text: 'Apply for Gateway Polytechnic Form',
    //     completed: false
    // })


// let ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     let pContent = p.textContent.includes('the') 
//     if(pContent){
//         p.remove()
//     }      
// })

//query and remove all paragraphs
// const paragraphs = document.querySelectorAll('p')
// const removeParagraphs = paragraphs.forEach(function (paragraph, index) {
//     paragraph.remove()
// })

// const uncompletedTodo = todos.filter(function(todo, index) {
//     if(!todo.completed) {
//         return todo
//     }
// })
// const viewUncompletedTodo = document.createElement('h3')
// viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) left to complete`
// document.querySelector('body').appendChild(viewUncompletedTodo)


// const getTodoTitle = todos.forEach(function(todo, index) {
//     // return todo
//     const addTodo = document.createElement('p')
//     addTodo.textContent = `${index + 1}. ${todo.text}`
//     document.querySelector('body').appendChild(addTodo)
//     //console.log(todo)
// })

/********************** ADDEVENTLISTENER INTRO *********************/

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('I\'m adding a new todo')
//     //e.target.textContent = 'I\'m adding a new todo'
// })

// document.querySelector('#new-todo').addEventListener('change', function (e) {
//     let newTodo = e.target.value
//     const addTodo = document.createElement('p')
//     addTodo.textContent = `${todos.length + 1}. ${newTodo}`
//     document.querySelector('body').appendChild(addTodo)
// })




// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data



const filtered = {
    searchText: '',
    completed: false,
    uncompleted: false
}



        // console.log(hideCompleted)


/***************************** CHECKBOX STATUS UPDATE ************************/
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filtered.completed = e.target.checked
    renderTodos(todos, filtered)
})

document.querySelector('#hide-uncompleted').addEventListener('change', function (e) {
    filtered.uncompleted = e.target.checked
    renderTodos(todos, filtered)
})

renderTodos(todos, filtered)

/****************************** GETTING USER'S INPUT FOR FILTERING ***********************/

document.querySelector('#filtered').addEventListener('input', function (e) {
    // console.log(e.target.value)
    filtered.searchText = e.target.value
    renderTodos(todos, filtered)
})

/************************************ ADDING NEW TODO *******************************/ 
// document.querySelector('#add-todo').addEventListener('submit', function (e) {
//     e.preventDefault()
//     todos.push({
//         text: e.target.elements.newTodo.value,
//         completed: false
//     })
//     e.target.elements.newTodo.value = ''
//     renderTodos(todos, filtered)

// })

/************************************ ADDING NEW TODO VIA LOCAL STORAGE *************************/ 
document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.newTodo.value.length)
    if (e.target.elements.newTodo.value.length > 0) {
        todos.push({
            text: e.target.elements.newTodo.value,
            completed: false
        })
    } else {
        todos.push({
            text: 'Untitled Note',
            completed: false
        })
    }
    
    saveTodos(todos)
    // console.log(todos)
    e.target.elements.newTodo.value = ''
    renderTodos(todos, filtered)
})

// fetch existing tools from localStorage
// getSavedTodos

// Save todos to localStorage
// saveTodos

// Render application todos based on filters
// renderTodos

// Get the DOM elements for an individual note
// generateTodoDOM

// Get the DOM elements for list summary
// generateSummaryDOM




/**
 * 1. Create a form with a single input for todo text
 * 2. Setup an submit handler and cancel the default action
 * 3. Add a new item to the todos array with that text data(completed value of false)
 * 4. Rerender the application
 * 5. Clear the input field value
 */

//  document.querySelector('#todo-Form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     todos.push({
//         text: e.target.elements.todoText.value,
//         completed: false
//     })
//      e.target.elements.todoText.value = ''
//      renderTodos(todos,filtered)
    
//  })

/**
 * 1. Create a checkbox and setup event listener -> "Hide completed"
 * 2. Create new hideCompleted filter (default false)
 * 3. Update hideCompleted an rerender list on checkbox change
 * 4. Setup renderTodos to remove completed items
 */

