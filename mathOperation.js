let displayValue = ''
let mathOperation = null
let num1 = null
let num2 = null  

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
    const display = calculatorContainer.querySelector('.display')
    display.textContent = displayValue
}

//  Generate Calculator UI 
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

    // Create the operation buttons
    for (let index = 0; index < calOperations.length; index++) {
        operations[index].setAttribute('style', `grid-area: ${calOperations[index]}`)
        if (calOperations[index] === 'display') {
            continue
        }
        const button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = operation[calOperations[index]] ?? 'undefine'
        // button.addEventListener('click', () => {
        //     if (button.textContent === '+' || button.textContent === '-' ||
        //     button.textContent === 'x' || button.textContent === '/') {
        //         mathOperation = button.textContent
        //         num1 = displayValue
        //         displayValue = ''
        //         update()    
        //     } else if (button.textContent === '=') {
        //         num2 = displayValue
        //         displayValue = operate(parseInt(num1), parseInt(num2), mathOperation)
        //         update()
        //     } else if (button.textContent === 'C') {
        //         displayValue = ''
        //         num1 = null
        //         num2 = null
        //         mathOperation = null
        //         update()
        //     }
            

        // })
        operations[index].appendChild(button)
    }

    // Create number buttons
    for (let i = 0; i < calNames.length; i++) {
        calNumbers[i].setAttribute('style', `grid-area: ${calNames[i]}`)
        // const button = document.createElement('button')
        // button.classList.add('btn')
        // button.textContent = `${i}`
        

        calNumbers[i].appendChild(button)
    }
}
// Invoke function
calculatorGenerator()
update()

// 