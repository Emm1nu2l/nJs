let par = []
ps = document.querySelectorAll('p')

ps.forEach (function (p, index) {
    par.push(p)
})

console.log(par)

par.filter(function (item) {
    console.log(item)
})

// const ps = par.forEach(function (p, index) {
//    
//     p.filter(function (p, index) {
//         console.log(p)
//     })
// })






