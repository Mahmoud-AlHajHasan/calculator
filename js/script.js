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

function operate(e) {
  if (e.target.textContent === '+') {
    display.textContent = add(currentXY.x,currentXY.y)
    currentXY.x = add(currentXY.x,currentXY.y)
    currentXY.y = 0
  }
}

function populateDisplay(e) {
  displayValue += e.target.textContent
}

function storeNumber(e) {
  {
    if (switchToY === false) { currentXY.x += e.target.textContent }
    else if (switchToY === true) { currentXY.y += e.target.textContent }
  }

}

function storeOperator(e) {
  {
    currentXY.operator = e.target.textContent
    switchToY = true
    numBtnDot.addEventListener("click", populateDisplay, { once: true })
    numBtnDot.addEventListener("click", storeNumber, { once: true })
  } {

  }
}

function populateActualDisplay(e) {
  if (switchToY === false) {
    display.textContent = currentXY.x
  } else {
    display.textContent = currentXY.y
  }
}


currentXY = {
  x: '',
  y: '',
  operator: '',
}

let displayValue = 0;
switchToY = false // switch from inputting x to y,
once1 = true // switch to reactivate dots

const display = document.querySelector("#display > div")

let numBtns = document.querySelectorAll(".num")
numBtns.forEach(numBtn => numBtn.addEventListener("click", populateDisplay))
numBtns.forEach(numBtn => numBtn.addEventListener("click", storeNumber))
numBtns.forEach(numBtn => numBtn.addEventListener("click", populateActualDisplay))

const numBtnDot = document.querySelector(".dot")
numBtnDot.removeEventListener("click", populateDisplay)
numBtnDot.removeEventListener("click", populateActualDisplay)

numBtnDot.removeEventListener("click", storeNumber)
numBtnDot.addEventListener("click", populateDisplay, { once: true })
numBtnDot.addEventListener("click", storeNumber, { once: true })
numBtnDot.addEventListener("click", populateActualDisplay, { once: true })

const operators = document.querySelectorAll(".operator")
operators.forEach(numBtn => numBtn.addEventListener("click", storeOperator))


const equalSign = document.querySelector(".equalSign")
const adder = document.querySelector(".adder")
const subtracter = document.querySelector(".subtracter")
const multiplier = document.querySelector(".multiplier")
const divider = document.querySelector(".divider")

equalSign.addEventListener("click", operate)
adder.addEventListener("click", operate)
subtracter.addEventListener("click", operate)
multiplier.addEventListener("click", operate)
divider.addEventListener("click", operate)





// when clicking a number again after an operator switchToY = true 
// when when clicking an operator, add a new dot event listener
// if switchToY is true, storeNumber now stores in Y
// overwrite display value with the newly written values of Y if (y!==0)
// each next click should add to Y string
// when pressing equal sign or any other operator show answer on display by -
// - operate. then store the function in the OPER 
// store the answer in x and clear y.
// if equal sign was pressed clear Operator and start adding to x again.
// if an operator ended the last calc keep it stored and add to y



