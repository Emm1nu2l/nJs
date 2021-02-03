// const todos = ['Help CM with his church financial document using excel', 'help Pastor get a new laptop battery', 'cover more tutorials on JS', 
// 'make research on branding', 'preparation of meals/readings/watch movies']


// console.log(`You have ${todos.length} todos`)
// console.log(`Your first todo is: ${todos[0]}`)
// console.log(`Your second to the last todo is: ${todos[todos.length - 2]}`)

// console.log(`You have ${todos.length} todos!`)
// console.log(todos)
// todos.splice(2, 1) //splice method can be use to add, remove or replace an item in an array list.
// console.log(todos)
// todos.push('Celebrating the Sam Aluko\'s Birthday')
// console.log(todos)
// todos.shift()
// console.log(todos)

// const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise the body']
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
// todos.push('Do rehearsals or Watch movies')
// todos.shift()
//console.log(todos)

console.log(`Yello, you have ${todos.length} todos in your list for today!`)

// todos.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// todos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })


// Note: the arguments are fixed but you can rename it but it's best advisable
// to rename in accordance to the specific function that is what makes the
//uncommented solution to be preferable than the commented one above. Hope you are enjoying it, bcos! I am!!!

//Converting the above forEach to for loop

// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }

//Note: for for loop you use '<' instead of '<=' as it's used in forEach
//Since we are dealing with array data then it's preferably to use forEach as for loop is used when
//there is no array data



// const deleteToDo = function (todos, todosText) {
//     todos.find(function (todo, index) {
//         console.log(index)
//         if (todo.text == todosText) {
//             todo.splice(index, 1)
//         }
//     })
// }

// const deleteToDo = function (todos, todosText) {
//     const index = todos.findIndex(function (todo, index) {         //todo is the name of the item in the todos List
//         return todos[index].text.toLowerCase() === todosText.toLowerCase()
//     })
//     todos.splice(index,1)
// }

// const rem = deleteToDo(todos, 'Clean kitchen')
// console.log(todos)

//**********TUTOR'S SOLUTION */

const deleteToDo = function (todos, todosText) {
    const index = todos.findIndex(function (todo, index) {         //todo is the name of the item in the todos List
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })

    if (index > -1){
        todos.splice(index, 1)
    } 
}

const rem = deleteToDo(todos, 'Clean kitchen')
console.log(todos)


/****************NOTE THIS
 * 
 * If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use Array.prototype.some().
 * 
 */

 /*********************FILTER TODOLIST/TODOS************** */
const getThingsToDo = function (todoList) {
    return todoList.filter(function (todo, index) {
        return !todo.completed    //since todo.completed is meant to be true
        //return todo.completed === false
        //return todo.completed !== true
    })
}

console.log(getThingsToDo(todos))

/***********************SORTING TODOS******************** */
const sortToDo = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortToDo(todos)
console.log(todos)