// 1. Delete dummy data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

let todos = []

// const todos = [{
//     text: 'Order cat food',
//     completed: false
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

 

document.querySelector('#new-todo').addEventListener('click', function (e) {
    let newTodo = e.target.value
    const addTodo = document.createElement('p')
    addTodo.textContent = `${todos.length + 1}. ${newTodo}`
    document.querySelector('body').appendChild(addTodo)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('I\'m adding a new todo')
    //e.target.textContent = 'I\'m adding a new todo'
})

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data


const filtered = {
    searchText: '',
    completed: false,
    uncompleted: false
}

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

        // console.log(hideCompleted)
const renderTodos = function (todos, filtered) {
    
    const filterCompleted = todos.filter(function (todo) {
        return todo.completed && filtered.completed
        // todo.text.remove()  // it is not working
        // if (todo.completed && filtered.completed){
        //     console.log(todo.text)
        // }
    })

    const filterUncompleted = todos.filter(function (todo) {
        // if (!todo.completed && filtered.uncompleted) {
        //     console.log(todo.text)
        // }
        return !todo.completed && filtered.uncompleted
    })
    
    

    const filteredTodos = todos.filter(function (todo) { 
        
        return todo.text.toLowerCase().includes(filtered.searchText.toLowerCase())
    })
    //  console.log(filteredTodos)
    document.querySelector('#todos').innerHTML = ''
    
//    filteredTodos.forEach(function (todo) {
//        const todoEl = document.createElement('p')
//        todoEl.textContent = todo.text
//        console.log(filterCompleted)
//        console.log(todoEl)
//        document.querySelector('#todos').appendChild(todoEl)
//    })

   filteredTodos.forEach(function(todo, index) {
       const todoEl = document.createElement('p')
       todoEl.textContent = todo.text
      if (filtered.completed || filtered.uncompleted) {
        filterCompleted.forEach(function (todo, index) {
            if (todo.text == todoEl.textContent) {
                todoEl.textContent = ''
                // todoEl.remove()  // it is not working that is why i alter the textContent
                // console.log(todo.text)
            } else {
                document.querySelector('#todos').appendChild(todoEl)
            }
        })
        filterUncompleted.forEach(function (todo, index) {
            if (todo.text == todoEl.textContent) {
                todoEl.textContent = ''
            } else {
                document.querySelector('#todos').appendChild(todoEl)
            }
        }) 
      } else {
          document.querySelector('#todos').appendChild(todoEl)
      }
   })
}

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filtered.completed = e.target.checked
    renderTodos(todos, filtered)
})

document.querySelector('#hide-uncompleted').addEventListener('change', function (e) {
    filtered.uncompleted = e.target.checked
    renderTodos(todos, filtered)
})

renderTodos(todos, filtered)



document.querySelector('#filtered').addEventListener('input', function (e) {
    // console.log(e.target.value)
    filtered.searchText = e.target.value
    renderTodos(todos, filtered)
})

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

