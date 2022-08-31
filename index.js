// code your solution here
function saturdayFun(event=`roller-skate`){
    return (`This Saturday, I want to ${event}!`)
}

function mondayWork(event=`go to the office`){ 
    return (`This Monday, I will ${event}.`)
}

function wrapAdjective(thing=`*`){
    return function(thing2=`special!`){
        return `You are ${thing}${thing2}${thing}!`
    };
}
wrapAdjective()