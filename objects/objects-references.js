let myAccount = {
    name: 'Idowu Emmanuel',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}
myAccount = {}

let addExpense = function (account, amount) {
   // account = {}
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)