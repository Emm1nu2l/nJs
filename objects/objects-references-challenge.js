/*
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

*/

let myAccount = {
    name: 'Idowu Emmanuel',
    expenses: 9700,
    income: 0
}

let addIncome = function (account, adIncome) {
    account.income = account.income + adIncome
    return account.income
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;

}

let getAccountSummary = function (account) {
    let accBalance = account.income - account.expenses
    return  `Account for ${account.name} has $${accBalance}. $${account.income} in income. $${account.expenses} in expenses.`
}

//let Income1 = addIncome(myAccount, 3800)
addIncome(myAccount, 3800)
//let Income2 = addIncome(myAccount, 12500)
Income2 = addIncome(myAccount, 12500)
//let reset = resetAccount(myAccount)
//let summary = getAccountSummary(myAccount)
getAccountSummary(myAccount)


//console.log(summary)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
//console.log(summary)
console.log(getAccountSummary(myAccount))