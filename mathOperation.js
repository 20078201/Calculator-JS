// Math Operation
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

const calNumber = document.querySelector("#calculator")

// Operate function will determine what math operation the user wants
function operate(num1, num2, operator) {
    let operation = {
        '+' : add(num1, num2),
        '-' : subtract(num1, num2),
        '*' : multiply(num1, num2),
        '/' : divide(num1, num2)
    }
    return operation[operator] ?? "Operation not found"
}

function calculatorGenerator() {
    // Array for numbers
    const calNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine']
    // Array for math operations and display + equals
    const calOperations = ['display', 'add', 'subtract', 'multiply',
    'divide', 'equal', 'clear']

    let operation = {
        'add' : '+',
        'subtract' : '-',
        'multiply' : 'X',
        'divide' : '/',
        'equal' : '=',
        'clear' : 'C'
    }

    // grab the parent element
    const calNumber = document.querySelector("#calculator")
    // create node list from parent element
    const calNumbers = calNumber.querySelectorAll('.cal-number')
    const operations = calNumber.querySelectorAll('.operation')

    for (let i = 0; i < calNames.length; i++) {
        calNumbers[i].setAttribute('style', `grid-area: ${calNames[i]}`)
        const button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = `${i}`
        calNumbers[i].appendChild(button)
    }

    for (let index = 0; index < calOperations.length; index++) {
        operations[index].setAttribute('style', `grid-area: ${calOperations[index]}`)
        if (calOperations[index] === 'display') {
            continue
        }
        
        const button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = operation[calOperations[index]] ?? 'undefine'
        operations[index].appendChild(button)
    }
}

calculatorGenerator()