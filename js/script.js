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

function operate(x, y, z) {
  return z(x, y)
}

function populateDisplay() {
  displayValue = + this.textContent
  x = displayValue
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


// user input : click numbers and operators to operate
// click more numbers and operators after last output
// loop


