// 1. Select all the buttons
const numBtns = document.querySelectorAll(".num");
const opBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result__output");
const history = document.querySelector(".result__history");

// Function for history and output
function getHistory() {
  return history.innerText;
}

// alert(getHistory());
