// 1. Select all the buttons
const numBtns = document.querySelectorAll(".num");
const opBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result__output");
const history = document.querySelector(".result__history");

// Function to get history and print it
function getHistory() {
  return history.innerText;
}
// alert(getHistory());

// Show value in history
function printHistory(num) {
  return (history.innerText = num);
}

// printHistory("92229");

// Another function to get and print reults
function getOutput() {
  return result.innerText;
}

function printOutput(num) {
  if (num == "") {
    result.innerText = num;
  } else {
    return (result.innerText = getFormattedNumber(num));
  }
}

// How to add comas??
// found reference to toLocaleString()

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

// printOutput(2222); // 2,222 - this trick worked

// Clearing the output
