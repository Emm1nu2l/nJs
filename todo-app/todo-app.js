let ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    let pContent = p.textContent.includes('the') 
    if(pContent){
        p.remove()
    }
})
 





