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

console.log(operate(3, 3, '/'))