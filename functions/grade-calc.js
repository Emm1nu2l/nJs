let getGrade = function (studentScore = 0, totalScore = 0) {
    let getPercent = (studentScore / totalScore) * 100
    let letterGrade = ''

    if (getPercent >= 90) {
        letterGrade = 'A'
    } else if(getPercent >= 80) {
        letterGrade = 'B'
    } else if (getPercent >= 70) {
        letterGrade = 'C'
    } else if (getPercent >= 60) {
        letterGrade = 'D'
    } else if (getPercent >= 50) {
        letterGrade = 'E'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${getPercent}%)!`
}

let grade1 = getGrade(15, 20)
let grade2 = getGrade(70, 200)
let grade3 = getGrade(360, 400)

console.log(grade1)
console.log(grade2)
console.log(grade3)