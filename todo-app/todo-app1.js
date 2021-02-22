const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: !false
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: true
}]

todos.splice(2, 0, {
    text: 'Do rehearsal or Exercise the body',
    completed: true
}, {
    text: 'Apply for Gateway Polytechnic Form',
    completed: false
})

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

// const uncompletedTodo = todos.filter(function (todo, index) {
//     if (!todo.completed) {
//         return todo
//     }
// })
// const viewUncompletedTodo = document.createElement('h3')
// viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) left to complete`
// document.querySelector('body').appendChild(viewUncompletedTodo)


// const getTodoTitle = todos.forEach(function (todo, index) {
//     // return todo
//     const addTodo = document.createElement('p')
//     addTodo.textContent = `${index + 1}. ${todo.text}`
//     document.querySelector('body').appendChild(addTodo)
//     //console.log(todo)
// })

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

const filters = {
    searchText: '',
    completed: false
}

const renderTodos = function (todos, filters) {

    // let filteredTodos = todos.filter(function (todo) {
    //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    // })

    // filteredTodos  =filteredTodos.filter(function (todo) {
    //     return !filters.completed || !todo.completed
    //     // if (filters.completed) {
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }
    // })

    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const completedMatch = !filters.completed || !todo.completed

        return searchTextMatch && completedMatch
    })


    // console.log(filteredNotes)
    document.querySelector('#todos').innerHTML = ''

    const uncompletedTodo = filteredTodos.filter(function (todo, index) {
        return !todo.completed
    })
    const viewUncompletedTodo = document.createElement('h3')
    viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) left to complete`
    document.querySelector('#todos').appendChild(viewUncompletedTodo)

    filteredTodos.forEach(function (todo, index) {
        const Ele = document.createElement('p')
        Ele.textContent = `${index + 1}. ${todo.text}`
        document.querySelector('#todos').appendChild(Ele)

    })
}

renderTodos(todos,filters)

document.querySelector('#filt-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-todos').addEventListener('change', function (e) {
    filters.completed = e.target.checked
    renderTodos(todos, filters)
    // console.log(e)
    // console.log(e.target.name)
})

/**
 * 1. Create a form with a single input for todo text
 * 2. Setup an submit handler and cancel the default action
 * 3. Add a new item to the todos array with that text data(completed value of false)
 * 4. Rerender the application
 * 5. Clear the input field value
 */

// document.querySelector('#todo-Form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     todos.push({
//         text: e.target.elements.todoText.value,
//         completed: false
//     })
//     e.target.elements.todoText.value = ''
//     renderTodos(todos, filters)

// })