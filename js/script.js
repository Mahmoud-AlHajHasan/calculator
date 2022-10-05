function add(x, y) {
  return ((+x) + (+y))
}

function subtract(x, y) {
  return ((+x) - (+y))
}

function multiply(x, y) {
  return ((+x) * (+y))
}

function divide(x, y) {
  return ((+x) / (+y))
}

function operate(numOne, numTwo, operation) {
  numOne = +x
  numTwo = +displayValue
  operation = operatorUsed
  displayValue = operation(numOne, numTwo)
  displayScreen.textContent = Math.round(displayValue * 100) / 100
  if (displayValue === Infinity && operation === divide){
    displayScreen.textContent = "bro why divide by zero you'll break me :("
  } 
  numOne = displayValue
  writeOver = true
  //re-add
  operatorButtons.forEach(
    button => {
      button.addEventListener("click", storeNumber)
      button.addEventListener("click", storeOperator)
      button.addEventListener("click", switchWriteOver)
    }
  )
  operatorButtons.forEach(
    button => button.removeEventListener("click", operateByOperator)
  )

}



function clear() {
  displayValue = '';
  x = '';
  displayScreen.textContent = '';
}

function operateByOperator(numOne, numTwo, operation) {
  numOne = +x
  numTwo = +displayValue
  operation = operatorUsed
  displayValue = operation(numOne, numTwo)
  displayScreen.textContent = Math.round(displayValue * 100) / 100
  if (displayValue === Infinity && operation === divide){
    displayScreen.textContent = "bro why divide by zero you'll break me :("
  }  numOne = displayValue

  x = displayValue
  operatorUsed = this.getAttribute("kind")
  if (operatorUsed === "add") { operatorUsed = add }
  if (operatorUsed === "subtract") { operatorUsed = subtract }
  if (operatorUsed === "multiply") { operatorUsed = multiply }
  if (operatorUsed === "divide") { operatorUsed = divide }
  writeOver = true
  //re-add
  operatorButtons.forEach(
    button => {
      button.addEventListener("click", storeNumber)
      button.addEventListener("click", storeOperator)
      button.addEventListener("click", switchWriteOver)
    }
  )
    

}


function populateDisplay() {
  if (writeOver) {
    displayValue = ''
    writeOver = false
  }
  displayValue += this.textContent
  displayScreen.textContent = displayValue
  backspaceButton.addEventListener("click", deleteOnce)
}

function populateDisplayDot() {
  if (writeOver) {
    displayValue = ''
    writeOver = false
  }
  backspaceButton.addEventListener("click", deleteOnce) 


  if (!(String(displayValue).split('').includes('.'))) {
    displayValue += this.textContent
    displayScreen.textContent = displayValue
  }
}

function deleteOnce() {
  temp = String(displayScreen.textContent)
  displayValue = temp.split('')
  displayValue.pop()
  displayValue = displayValue.join('')
  displayScreen.textContent = displayValue
}

function storeNumber() {
  x = displayValue

  //delete
  operatorButtons.forEach(
    button => {
      button.removeEventListener("click", storeNumber)
    }
  )

  return x
}

function storeOperator() {
{  operatorUsed = this.getAttribute("kind")
  if (operatorUsed === "add") { operatorUsed = add }
  if (operatorUsed === "subtract") { operatorUsed = subtract }
  if (operatorUsed === "multiply") { operatorUsed = multiply }
  if (operatorUsed === "divide") { operatorUsed = divide }
}
operatorButtons.forEach(
  button => {
    button.removeEventListener("click", storeOperator)
  }
)
}

function switchWriteOver() {
  writeOver = true
  operatorButtons.forEach(
    button => {
      button.removeEventListener("click", switchWriteOver)
    }
  )

  equalButton.addEventListener("click", operate, { once: true })
  operatorButtons.forEach(
    button => button.addEventListener("click", operateByOperator)
  )

}

displayScreen = document.querySelector("#display > div")
const clearButton = document.querySelector("#clear")
const backspaceButton = document.querySelector("#backspace")
const operatorButtons = document.querySelectorAll(".operator")
const digitButtons = document.querySelectorAll(".num")
const dotButton = document.querySelector(".dot")
const equalButton = document.querySelector(".equalSign")

let displayValue = ''
let operatorUsed = ''
let x = ''
let y = ''
let temp = ''
writeOver = false

// first input
digitButtons.forEach(
  button => button.addEventListener("click", populateDisplay)
)

dotButton.addEventListener("click", populateDisplayDot)

// operator first time
operatorButtons.forEach(
  button => {
    button.addEventListener("click", storeNumber)
    button.addEventListener("click", storeOperator)
    button.addEventListener("click", switchWriteOver)
  }
)


clearButton.addEventListener("click",clear)

