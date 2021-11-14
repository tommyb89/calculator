"use strict";

// 1. Select all the buttons
var numBtns = document.querySelectorAll(".num");
var opBtn = document.querySelectorAll(".operator");
var equalsBtn = document.querySelector(".equal");
var deleteBtn = document.querySelector(".delete");
var clear = document.querySelector(".clear");
var result = document.querySelector(".result__output");
var history = document.querySelector(".result__history"); // Function for history and output

function getHistory() {
  return history.innerText;
} // alert(getHistory());