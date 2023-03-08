let memory

//Add event listener to all the numbers
let numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        newNumber(number.innerText)
    })
})

//Add event listener to all the operators
let operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operation(operator.innerText)
    })
})


//Add AC button
let clear = document.querySelector(".clear")
clear.addEventListener('click', () => {
        allClear()
    })


//Add Sum button
let sum = document.querySelector(".sum")
sum.addEventListener('click', () => {
        equals()
    })

//Add dot button
let dot = document.querySelector(".dot")
dot.addEventListener('click', () => {
        addDot()
    })


//Add new number to screen
function newNumber(number) {
    console.log(number)
    let value = document.querySelector(".main").innerText
    if (value == `0`) {
       if (number == `0`) {
        console.log('?')
       } else {
        document.querySelector(".main").innerText = number
       }
    } else {
        document.querySelector(".main").innerText += number
    }
}

function allClear() {
    document.querySelector(".main").innerText = ''
    document.querySelector(".supporting").innerText = ''
    document.querySelector(".screenOp").innerText = ''
    memory = ''
}

function addDot(){
    let value = document.querySelector(".main").innerText
    !value.includes('.') ? document.querySelector(".main").innerText += "." : ``
}

function operation(operator){
    let prevVal = document.querySelector(".supporting").innerText
    let newVal = document.querySelector(".main").innerText
    let currentOper = document.querySelector(".screenOp").innerText

    if (prevVal == '' && newVal == '') {
        return
    }

    if (operator === `+/-`) {
        document.querySelector(".main").innerText = -(Number(newVal))
        return
    }



    if (prevVal !== '' && newVal == '') {
        document.querySelector(".screenOp").innerText = operator
        return
    }

    if (prevVal == ''){
        document.querySelector(".supporting").innerText = newVal
        document.querySelector(".main").innerText = ''
        document.querySelector(".screenOp").innerText = operator
        return
    }

    if (prevVal !== '' && currentOper !== ''){
        equals()
        document.querySelector(".screenOp").innerText = operator
        return
    }

    if (prevVal !== '' && newVal !== '' && currentOper == ''){
        document.querySelector(".screenOp").innerText = operator
        equals()
        document.querySelector(".screenOp").innerText = operator
        return
    }

}

// function operation(operator){
//     let prevVal = document.querySelector(".supporting").innerText
//     let newVal = document.querySelector(".main").innerText
//     let currentOper = document.querySelector(".screenOp").innerText

//     if (operator === `+/-`) {
//         document.querySelector(".main").innerText = -(Number(newVal))
//     } else if (prevVal == ''){
//             document.querySelector(".supporting").innerText = newVal
//             document.querySelector(".main").innerText = ''
//             document.querySelector(".screenOp").innerText = operator
//     } else {
//         switch(operator){
//             case `+`:
//                 document.querySelector(".supporting").innerText = Number(prevVal) + Number(newVal)
//                 document.querySelector(".main").innerText = ''
//                 break;
//             case `-`:
//                 document.querySelector(".supporting").innerText = Number(prevVal) - Number(newVal)
//                 document.querySelector(".main").innerText = ''
//                 break;
//             case `x`:
//                 document.querySelector(".supporting").innerText = Number(prevVal) * Number(newVal)
//                 document.querySelector(".main").innerText = ''
//                 break;
//             case `÷`:
//                 document.querySelector(".supporting").innerText = Number(prevVal) / Number(newVal)
//                 document.querySelector(".main").innerText = ''
//                 break;
//             }
//     }
// }

function equals() {
    let prevVal = document.querySelector(".supporting").innerText
    let newVal = document.querySelector(".main").innerText
    let currentOper = document.querySelector(".screenOp").innerText

    if(newVal == '') {
        newVal = memory
    }

    if(prevVal == ''){
        document.querySelector(".supporting").innerText = newVal
    }

    switch(currentOper){
        case `+`:
            document.querySelector(".supporting").innerText = Number(prevVal) + Number(newVal)
            break;
        case `-`:
            document.querySelector(".supporting").innerText = Number(prevVal) - Number(newVal)
            break;
        case `x`:
            document.querySelector(".supporting").innerText = Number(prevVal) * Number(newVal)
            break;
        case `÷`:
            if (Number(newVal) === 0){
                document.querySelector(".supporting").innerText = `No. Can't do. Not cool.`
                
            } else {
                document.querySelector(".supporting").innerText = Number(prevVal) / Number(newVal)
            }
            break;
        }
        document.querySelector(".main").innerText = ''
        memory = newVal
}