let displayValue = ''
let firstOperation = ''
let secondOperation = ''
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
            if (previousOperand !== '') {
                // Set next operand
                nextOperand = displayValue
                // evaluate 
                displayValue = operate(parseInt(previousOperand), parseInt(nextOperand), firstOperation)
                // reset operands
                previousOperand = ''
                nextOperand = ''
                // display
                update()
                return
            } 
            firstOperation = operations[i].textContent
            previousOperand = displayValue // Store display value
            displayValue = "" // set display value to null
            update()
        } // Evaluate previous and next operand
        else if (operations[i].textContent === "=") {
            nextOperand = displayValue
            displayValue = operate(parseInt(previousOperand), parseInt(nextOperand), firstOperation)
            update()
            nextOperand = ""
        } else if (operations[i].textContent === 'C'){
            displayValue = ''
            firstOperation = ''
            previousOperand = ''
            nextOperand = '' 
            update() 
        }
    })
}

for (let i = 0; i < calNames.length; i++) {
    calNumbers[i].setAttribute('style', `grid-area: ${calNames[i]}`)
    calNumbers[i].addEventListener('click', pressNumber)
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
    const currentDisplay = display.querySelector('.current_Value')

    currentDisplay.textContent = displayValue
    
}
// For inputting number
function pressNumber(e) {
    displayValue = displayValue.concat(e.target.textContent)
    update()
}
