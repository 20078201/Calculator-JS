export class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    // functions
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = ''
    }

    delete () {
        // remove last element
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber (number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString() 
    }

    chooseOperation (operation) {
        if (this.currentOperand === '') return
        // this if statement allow chaining calculation without pressing equals
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        computation = this.operate(prev, current, this.operation)
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0]) // before the decimal
        const decimalDigits = stringNumber.split('.')[1] // after decimal
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        // check if a user enter a decimal in the display
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.textContent = 
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOperandTextElement.textContent = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.textContent = ''
        }
    }

    operate(num1, num2, userOperation) {
        let operation = {
            '+' : num1 + num2,
            '-' : num1 - num2,
            'x' : num1 * num2,
            '/' : num1 / num2
        }
        return operation[userOperation]
    }
}
