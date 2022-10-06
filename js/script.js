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
  if ((displayValue === Infinity || displayScreen.textContent === 'NaN') && (operation === divide) && (+numTwo === 0)) {
    displayScreen.textContent = "stop you'll break me :("
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

  if (displayScreen.textContent === 'NaN') { displayScreen.textContent = 'Error, reset.' }

}



function clear() {
  displayValue = '';
  x = '';
  displayScreen.textContent = '';
  operatorUsed = ''

  operatorButtons.forEach(
  button => {
    button.removeEventListener("click", storeNumber)
    button.removeEventListener("click", storeOperator)
    button.removeEventListener("click", switchWriteOver)
  }
)

equalButton.removeEventListener("click", operate, { once: true })

operatorButtons.forEach(
  button => button.removeEventListener("click", operateByOperator)
)
}

function operateByOperator(numOne, numTwo, operation) {
  numOne = +x
  numTwo = +displayValue
  operation = operatorUsed
  displayValue = operation(numOne, numTwo)
  displayScreen.textContent = Math.round(displayValue * 100) / 100
  if ((displayValue === Infinity || displayScreen.textContent === 'NaN') && (operation === divide) && (+numTwo === 0)) {
    displayScreen.textContent = "stop you'll break me :("
  } numOne = displayValue

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

  operatorButtons.forEach(
    button => {
      button.addEventListener("click", storeNumber)
      button.addEventListener("click", storeOperator)
      button.addEventListener("click", switchWriteOver)
    }
  )
}

function populateDisplayDot() {

  if (writeOver) {
    displayValue = ''
    writeOver = false
  }
  backspaceButton.addEventListener("click", deleteOnce)


  if (!(String(displayValue).split('').includes('.'))) {
    displayValue += "."
    displayScreen.textContent = displayValue
  }



  operatorButtons.forEach(
    button => {
      button.addEventListener("click", storeNumber)
      button.addEventListener("click", storeOperator)
      button.addEventListener("click", switchWriteOver)
    }
  )
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
  {
    operatorUsed = this.getAttribute("kind")
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

function minus() {
  displayValue = -1 * +displayValue
  displayScreen.textContent = displayValue
}

displayScreen = document.querySelector("#display > div")
const clearButton = document.querySelector("#clear")
const backspaceButton = document.querySelector("#backspace")
const operatorButtons = document.querySelectorAll(".operator")
const digitButtons = document.querySelectorAll(".num")
const dotButton = document.querySelector(".dot")
const equalButton = document.querySelector(".equalSign")
const minusButton = document.querySelector("#minus")

let displayValue = ''
let operatorUsed = ''
let x = ''
let y = ''
let temp = ''
writeOver = false

digitButtons.forEach(
  button => button.addEventListener("click", populateDisplay)
)

dotButton.addEventListener("click", populateDisplayDot)

operatorButtons.forEach(
  button => {
    button.addEventListener("click", storeNumber)
    button.addEventListener("click", storeOperator)
    button.addEventListener("click", switchWriteOver)
  }
)


clearButton.addEventListener("click", clear)
document.addEventListener('keydown', (e) => { if (e.key === 'Delete') { clear() } })

minusButton.addEventListener("click", minus)
document.addEventListener('keydown', (e) => { if (e.key === 'm') { minus() } })

document.addEventListener('keydown', (e) => { if (e.key === 'Backspace') { deleteOnce() } })

document.addEventListener('keydown', (e) => { if (e.key === '.') { populateDisplayDot() } })