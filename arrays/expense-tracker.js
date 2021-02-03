const account = {
    name: 'VICTORY PARISH',
    expenses: [{
        description: 'Coffee at Capital One Cafe',
        amount: 2000
    }, {
        description: 'Tithes',
        amount: 50050000
    }, {
        description: 'Sunday School Offering',
        amount: 8500000
    }]
}

// const addExpenses = function(account, expense, amount) {
//     account.push({
//         description: expense,
//         amount: amount
//     })
// }

const addExpenses = function (expense, amount) {
    account.push({
        description: expense,
        amount: amount
    })
}

const getAccountSummary = function (account) {
    account.expenses.forEach(function (expense, index) {
        const totalExpenses = expense.amount + totalExpenses
        return totalExpe\nses
    })

    return `${account} has $${totalExpenses} in expenses`
}

console.log(getAccountSummary(account))