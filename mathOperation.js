



//  Generate Calculator UI 
function calculatorGenerator() {
    

    


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
    }

    // Create number buttons
    for (let i = 0; i < calNames.length; i++) {
        calNumbers[i].setAttribute('style', `grid-area: ${calNames[i]}`)
        // const button = document.createElement('button')
        // button.classList.add('btn')
        // button.textContent = `${i}`
        
    }
}
// Invoke function
calculatorGenerator()
update()

// 