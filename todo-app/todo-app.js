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
},{
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
const paragraphs = document.querySelectorAll('p')
const removeParagraphs = paragraphs.forEach(function (paragraph, index) {
    paragraph.remove()
})

const uncompletedTodo = todos.filter(function(todo, index) {
    if(!todo.completed) {
        return todo
    }
})
const viewUncompletedTodo = document.createElement('h3')
viewUncompletedTodo.textContent = `You have ${uncompletedTodo.length} todo(s) left to complete`
document.querySelector('body').appendChild(viewUncompletedTodo)


const getTodoTitle = todos.forEach(function(todo, index) {
    // return todo
    const addTodo = document.createElement('p')
    addTodo.textContent = `${index + 1}. ${todo.text}`
    document.querySelector('body').appendChild(addTodo)
    //console.log(todo)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('I\'m adding a new todo')
    //e.target.textContent = 'I\'m adding a new todo'
})

document.querySelector('#new-todo').addEventListener('change', function (e) {
    let newTodo = e.target.value
    const addTodo = document.createElement('p')
    addTodo.textContent = `${todos.length + 1}. ${newTodo}`
    document.querySelector('body').appendChild(addTodo)
})

