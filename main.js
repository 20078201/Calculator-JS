let displayValue = ''
let mathOperation = ''
let previousOperand = ''
let nextOperand = ''  

// Array for numbers
const calNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
'seven', 'eight', 'nine']
// Array for math operations and display + equals
const calOperations = ['add', 'subtract', 'multiply',
'divide', 'equal', 'clear']

let operation = {
    'add' : '+',
    'subtract' : '-',
    'multiply' : 'x',
    'divide' : '/',
    'equal' : '=',
    'clear' : 'C'
}

// grab the parent element
const calNumber = document.querySelector("#calculator")
// create node list from parent element
const calNumbers = calNumber.querySelectorAll('.cal-number')
const operations = calNumber.querySelectorAll('.operation')

for (let i = 0; i < calOperations.length; i++) {
    operations[i].setAttribute('style', `grid-area: ${calOperations[i]}`)
    if (calOperations[i] === 'display') {
        continue
    }
    operations[i].addEventListener('click', () => {
        if (operations[i].textContent === '+' || operations[i].textContent === '-' ||
        operations[i].textContent === 'x' || operations[i].textContent === '/') {
                 
            } else if (operations[i].textContent === '=') {
               
            } else if (operations[i].textContent === 'C') {
                displayValue = ""
                previousOperand = ""
                nextOperand = ""
                mathOperation = ""
                update()
            }
    })
}

for (let i = 0; i < calNames.length; i++) {
    calNumbers[i].setAttribute('style', `grid-area: ${calNames[i]}`)
    calNumbers[i].addEventListener('click', operandInput)
}

// Math Operations
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}
// Operate function will determine what math operation the user wants
function operate(num1, num2, operator) {
    let operation = {
        '+' : add(num1, num2),
        '-' : subtract(num1, num2),
        'x' : multiply(num1, num2),
        '/' : divide(num1, num2)
    }
    return operation[operator] ?? "Operation not found"
}
// Update the display Values
function update() {
    const container = document.querySelector('div.container')
    const calculatorContainer = container.querySelector('.calculator')
    const display = calculatorContainer.querySelector('#display')
    const previousDisplay = display.querySelector('.previous_Value')
    const currentDisplay = display.querySelector('.current_Value')
    
    if (currentDisplay.textContent === "") {
        previousDisplay.textContent = displayValue
        currentDisplay.textContent = displayValue  
    } else if (currentDisplay.textContent !== null) {
        currentDisplay.textContent = displayValue
        previousDisplay.textContent = previousOperand
    }
       
}
// For inputting number
function operandInput(e) {
    if (previousOperand === "") {
        previousOperand = e.target.textContent
        displayValue = previousOperand
        update()
    } else if (previousOperand !== "") {
        previousOperand = nextOperand
        nextOperand = e.target.textContent
        displayValue = nextOperand
        update()
    }
}
// For math operation
