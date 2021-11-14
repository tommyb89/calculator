"use strict";
// 1. Select all the buttons
const numbers = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
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
    result.innerText = getFormattedNumber(num);
  }
}

// How to add comas??
// found reference to toLocaleString()

function getFormattedNumber(num) {
  if (num === "-") {
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

// printOutput(2222); // 2,222 - this trick worked

function reverseNumFormat(num) {
  return Number(num.replace(/,/g, ""));
}

// alert(reverseNumFormat(getOutput(12312312))); // no comas

// Adding event listeners to all operators
operator.forEach((op) => {
  op.addEventListener("click", () => {
    // alert("Operator clicked");

    // Clar button functionality
    if (op.classList.contains("clear")) {
      printHistory("");
      printOutput("");
    } else if (op.classList.contains("delete")) {
      let output = reverseNumFormat(getOutput()).toString();
      if (output) {
        //output has value?
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }

      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumFormat(output);
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + op.innerHTML;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
});

// Adding event listeners to all numbers & printing them in the output
numbers.forEach((n) => {
  n.addEventListener("click", () => {
    // alert("Number clicked");

    let output = reverseNumFormat(getOutput());
    if (output != NaN) {
      // just checking if the output is a number
      output += n.innerText;
      printOutput(output);
    }
  });
});
