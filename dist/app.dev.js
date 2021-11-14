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
  return result.innerText = num;
} // console.log(printOutput(44));