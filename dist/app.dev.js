"use strict";

// 1. Select all the buttons
var numBtns = document.querySelectorAll(".num");
var opBtn = document.querySelectorAll(".operator");
var equalsBtn = document.querySelector(".equal");
var deleteBtn = document.querySelector(".delete");
var clear = document.querySelector(".clear");
var result = document.querySelector(".result__output");
var history = document.querySelector(".result__history"); // Function to get history and print it

function getHistory() {
  return history.innerText;
} // alert(getHistory());
// Show value in history


function printHistory(num) {
  return history.innerText = num;
} // printHistory("92229");
// Another function to get and print reults


function getOutput() {
  return result.innerText;
}

function printOutput(num) {
  if (num == "") {
    result.innerText = num;
  } else {
    return result.innerText = getFormattedNumber(num);
  }
} // How to add comas??
// found reference to toLocaleString()


function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
} // printOutput(2222); // 2,222 - this trick worked
// Clearing the output