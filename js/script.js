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

function operate(oper, x, y) {
  return oper(x, y)
}

function populateDisplay(e) {
  displayValue += e.target.textContent
  displayScreen.textContent = displayValue
}

let displayValue = '';
const displayScreen = document.querySelector("#display > div")

const numBtns = document.querySelectorAll(".num")
const dotBtns = document.querySelectorAll(".dot")
numBtns.forEach(
  numBtn => numBtn.addEventListener("click", populateDisplay)
)
dotBtns.forEach(
  dotBtn => dotBtn.addEventListener("click", populateDisplay, { once: true })
)




// store pressed numbers in displayValue 
// show displayed value 
// store first number that user inputs when clicking operator