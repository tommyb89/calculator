// 1. Select all the buttons
const numBtns = document.querySelectorAll(".calc__button-num");
const operationBtn = document.querySelectorAll(".calc__button-op");
const equalsBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".del");
const acBtn = document.querySelector(".ac");
const currentOperandTextElement = document.querySelector(".result");
const prev = document.querySelector(".prev-op");

let prevOp = "",
  inputLog = "",
  input = "",
  displayInput = "",
  operation = "";

numBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let clickedBtn = event.target.innerText;

    let numberArr = [];
    numberArr.push(clickedBtn);
    // console.log(numberArr);
  });
});

// Get operation

const operator = () => {
  operationsBtn.forEach();
};
// Function that calculates numbers

// function calculate(event) {
//   console.log(event.target.value);
// }
// calculate();
