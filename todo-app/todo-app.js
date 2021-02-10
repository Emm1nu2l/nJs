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
})

// let ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     let pContent = p.textContent.includes('the') 
//     if(pContent){
//         p.remove()
//     }
// })

const uncompletedTodo = todos.filter(function(todo, index) {
    if(!todo.completed) {
        return todo
    }
})
const viewUncompletedTodo = document.createElement('p')
viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) left to complete`
document.querySelector('body').appendChild(viewUncompletedTodo)

const viewTodo = function (todos) {
    let toDo = document.createElement('p').textContent
    todos.find(function (todo, index) {
        toDo = todo.text
        //document.querySelector('body').appendChild(toDo)
        console.log(toDo)
        //return toDo
    })

    // for (let i = 0; i <= viewTodo.length; i++) {
        
    // }
}

viewTodo(todos)

