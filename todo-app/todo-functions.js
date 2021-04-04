// fetch existing tools from localStorage
const getSavedTodos = function () {
    /******************** USING LOCAL STORAGE **********************/
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}


// Save todos to localStorage 
const saveTodos = function (todos) {
    return localStorage.setItem('todos', JSON.stringify(todos))
}

// 1. Setup a root div
// 2. Setup and append a checkbox (set type attribute)
// someNode.setAttribute('type', 'value')
// 3. Setup and append a span (set text)
// 4. Setup and append a button (set text)

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    
    const todoEl = document.createElement('div')
    const textEl = document.createElement('span')
    const remButton = document.createElement('button')
    const checkbox = document.createElement('input')

    // Setup todo checkbox
    checkbox.setAttribute("type", "checkbox")
    todoEl.appendChild(checkbox)

    // console.log(checkbox)
    // todoEl.textContent = `${index + 1}. ${todo.text}`

    // Setup todo text
    textEl.textContent = `${todo.text}`
    todoEl.appendChild(textEl)

    // Setup todo remove button
    remButton.textContent = 'x'
    todoEl.appendChild(remButton)
    return todoEl
}


// Get the DOM elements for list summary
const generateSummaryDOM = function (uncompletedTodo) {
    const viewUncompletedTodo = document.createElement('h3')
    viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) to complete`
    return viewUncompletedTodo
}


// Render application todos based on filters
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
        // console.log(!todo.completed)
        return !todo.completed && filtered.uncompleted
    })
    
    const filteredTodos = todos.filter(function (todo) { 
        
        return todo.text.toLowerCase().includes(filtered.searchText.toLowerCase())
    })
    //  console.log(filteredTodos)

    /****************************** GET UNCOMPLETED TODO(S) *****************************/
    const uncompletedTodo = todos.filter(function(todo, index) {
        if(!todo.completed) {
            return todo
        }
    })

    /******************************* UNNECESSARY FILTERED DATA CLEARED *********************/
    document.querySelector('#todos').innerHTML = ''
    /******************************* UNCOMPLETED TODO'S STATUS UPDATE ***********************/
    // const uncompletedTodo = todos.filter(function(todo, index) {
    //     if(!todo.completed) {
    //         return todo
    //     }
    // })
    // const viewUncompletedTodo = document.createElement('h3')
    // viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) to complete`
    // document.querySelector('#todos').appendChild(viewUncompletedTodo)

    /******************************** TODO LIST SUMMARY ****************************/
    document.querySelector('#todos').appendChild(generateSummaryDOM(uncompletedTodo))
    
 //    filteredTodos.forEach(function (todo) {
 //        const todoEl = document.createElement('p')
 //        todoEl.textContent = todo.text
 //        console.log(filterCompleted)
 //        console.log(todoEl)
 //        document.querySelector('#todos').appendChild(todoEl)
 //    })

    /******************************** FILTERING TODOLIST ******************************/

   filteredTodos.forEach(function(todo, index) {
       console.log(generateTodoDOM(todo))
       const todoEl = generateTodoDOM(todo) 
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


