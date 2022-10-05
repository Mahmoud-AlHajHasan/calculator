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

displayScreen = document.querySelector("#display > div")
clearButton = document.querySelector("#clear")
undoButton = document.querySelector("#undo")
operatorButtons = document.querySelectorAll(".operator")
digitButtons = document.querySelectorAll(".num")
dotButton = document.querySelector(".dot")
equalButton = document.querySelector(".equalSign")


