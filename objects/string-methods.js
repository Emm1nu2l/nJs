let name = ' Idowu Emmanuel '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123session098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

let isValidPassword = function (password) {
    let check = password.length >= 8 && !password.includes('password')
    return check
}

console.log(isValidPassword('joyous'))
console.log(isValidPassword(password))
console.log(isValidPassword('pass123word@$'))
console.log(isValidPassword('123Password'))
console.log(isValidPassword('123password'))

