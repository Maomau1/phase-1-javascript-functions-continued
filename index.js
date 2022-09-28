// code your solution here
const saturdayFun = function (what = `roller-skate`) {
    return `This Saturday, I want to ${what}!`
}

const mondayWork = function (what = `go to the office`) {
    return `This Monday, I will ${what}.`
} 

const wrapAdjective = function (par = `*`) {
    return function (par2 = `special`){
        return `You are ${par}${par2}${par}!`
    }
}