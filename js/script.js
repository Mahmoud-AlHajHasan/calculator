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
  displayScreen.textContent = displayValue
  numOne = displayValue

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
  operatorUsed = this.getAttribute("kind")
  if (operatorUsed === "add") { operatorUsed = add }
  if (operatorUsed === "subtract") { operatorUsed = subtract }
  if (operatorUsed === "multiply") { operatorUsed = multiply }
  if (operatorUsed === "divide") { operatorUsed = divide }

}

function switchWriteOver() {
  writeOver = true
  operatorButtons.forEach(
    button => {
      button.removeEventListener("click", switchWriteOver)
    }
  )

}

displayScreen = document.querySelector("#display > div")
const clearButton = document.querySelector("#clear")
const undoButton = document.querySelector("#undo")
const operatorButtons = document.querySelectorAll(".operator")
const digitButtons = document.querySelectorAll(".num")
const dotButton = document.querySelector(".dot")
const equalButton = document.querySelector(".equalSign")

let displayValue = ''
let operatorUsed = ''
let x = ''
let y = ''
writeOver = false

// first input
digitButtons.forEach(
  button => button.addEventListener("click", populateDisplay)
)
dotButton.addEventListener("click", populateDisplay, { once: true })

// operator first time
operatorButtons.forEach(
  button => {
    button.addEventListener("click", storeNumber)
    button.addEventListener("click", storeOperator)
    button.addEventListener("click", switchWriteOver)
  }
)

// first equal
equalButton.addEventListener("click", operate)
