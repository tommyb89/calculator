"use strict";

// 1. Select all the buttons
var numBtns = document.querySelectorAll(".calc__button-num");
var operationBtn = document.querySelectorAll(".calc__button-op");
var equalsBtn = document.querySelector(".equals");
var deleteBtn = document.querySelector(".del");
var acBtn = document.querySelector(".ac");
var currentOperandTextElement = document.querySelector(".result");
var prev = document.querySelector(".prev-op");
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