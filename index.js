// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(par='*'){
    return (function(par2='special'){
        return `You are ${par+par2+par}!`
    })
}