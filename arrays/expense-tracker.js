const account = {
    name: 'VICTORY PARISH',
    expenses: [/*{
        description: 'Coffee at Capital One Cafe',
        amount: 2000
    }, {
        description: 'Tithes',
        amount: 50050000
    }, {
        description: 'Sunday School Offering',
        amount: 8500000
    }*/],
    income: [],
    addExpense: function (expense, amount) {
        this.expenses.push({
            description: expense,
            amount: amount
        })
    },
    addIncome: function (income, amount) {
        this.income.push({
            description: income,
            amount: amount
        })
    },
    getAccountSummary: function () {  //you can put the account name as argument, it makes no difference
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function (expense, index) {
            totalExpenses = expense.amount + totalExpenses
            return totalExpenses
        })

        this.income.forEach(function (income, index) {
            totalIncome = income.amount + totalIncome
            return totalExpenses
        })
        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}

// const addExpenses = function(account, expense, amount) {
//     account.push({
//         description: expense,
//         amount: amount
//     })
// }

// const addExpense = function (expense, amount) {
//     account.push({
//         description: expense,
//         amount: amount
//     })
// }

// const getAccountSummary = function (account) {
//     account.expenses.forEach(function (expense, index) {
//         totalExpenses = expense.amount + totalExpenses
//         return totalExpenses
//     })

//     return `${account.name} has $${totalExpenses} in expenses`
// }

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())