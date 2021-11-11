"use strict";

// 1. Select all the buttons
var numBtns = document.querySelectorAll("[data-number]");
var operationBtn = document.querySelectorAll("[data-operation]");
var equalsBtn = document.querySelector("[data-equals]");
var deleteBtn = document.querySelector("[data-delete]");
var acBtn = document.querySelector("[data-all-clear]");
var currentOperandTextElement = document.querySelector("[data-current-operand ]");
var prevOperandTextElement = document.querySelector("[data-previous-operand ]");
var prevOp = "",
    inputLog = "",
    input = "",
    displayInput = "",
    operation = "";
numBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    var clickedBtn = event.target.innerText;
    var numberArr = [];
    numberArr.push(clickedBtn); // console.log(numberArr);
  });
}); // Get operation

var operator = function operator() {
  operationsBtn.forEach();
}; // Function that calculates numbers
// function calculate(event) {
//   console.log(event.target.value);
// }
// calculate();