function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

function operate(x, y, basicMathFunction) {
  return basicMathFunction(x, y)
}

let numBtns = document.querySelectorAll(".num")
numBtns.forEach(numBtn => numBtn.addEventListener("click", populateDisplay))

const numBtnDot = document.querySelector(".dot")

numBtnDot.removeEventListener("click", populateDisplay)
numBtnDot.addEventListener("click", populateDisplay, {once:true})

let displayValue = 0;

function populateDisplay(e) {
  displayValue += e.target.textContent
}