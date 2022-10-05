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

function operate(oper, x2, y) {
   oper = operatorUsed
   x2 = x
   y = displayValue
  displayValue = oper(x, displayValue)
  displayScreen.textContent = displayValue
  x = displayValue
  operators.forEach(
    operator => operator.addEventListener("click", storeValueInDisplay,
      { once: true })
  )
  
}

function populateDisplay(e) {
  displayValue += e.target.textContent
  displayScreen.textContent = displayValue
}

function storeValueInDisplay(e) {
  x = +displayValue
  displayValue = ''
  operatorUsed = this.textContent
  if (operatorUsed === '+') { operatorUsed = add };
  if (operatorUsed === '-') { operatorUsed = subtract };
  if (operatorUsed === '*') { operatorUsed = multiply };
  if (operatorUsed === '/') { operatorUsed = divide };
  dotBtns.forEach(
    dotBtn => dotBtn.addEventListener("click", populateDisplay, { once: true })
  )
  operators.forEach(
    operator => operator.addEventListener("click", operate,
      { once: true })
  )
  equalSign.addEventListener("click", storeValueInDisplay,{once:true})

}

let displayValue = '';
let x = ''
let y = ''
let operatorUsed = ''

const displayScreen = document.querySelector("#display > div")

const numBtns = document.querySelectorAll(".num")
const dotBtns = document.querySelectorAll(".dot")
numBtns.forEach(
  numBtn => numBtn.addEventListener("click", populateDisplay)
)
dotBtns.forEach(
  dotBtn => dotBtn.addEventListener("click", populateDisplay, { once: true })
)

const operators = document.querySelectorAll(".operator")
operators.forEach(
  operator => operator.addEventListener("click", storeValueInDisplay,
    { once: true })
)

const equalSign = document.querySelector(".equalSign")





// click digit buttons > digits on display and in displayValue
// click equal > nothing
// click operator > displayValue saved in x and cleared, operator saved in operatorUsed
// click digit buttons > 