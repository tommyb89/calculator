// 1. Select all the buttons
const numBtns = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const acBtn = document.querySelector("[data-all-clear]");
const currentOperandTextElement = document.querySelector(
  "[data-current-operand ]"
);
const prevOperandTextElement = document.querySelector(
  "[data-previous-operand ]"
);

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
