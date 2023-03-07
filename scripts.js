//Find screen values

let oldValue = document.querySelector(".supporting").innerText

console.log(oldValue)


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
        console.log(operator.innerText)
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
        console.log(sum.innerText)
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
    document.querySelector(".supporting").innerText = ``
}

function addDot(){
    let value = document.querySelector(".main").innerText
    !value.includes('.') ? document.querySelector(".main").innerText += "." : ``
}
