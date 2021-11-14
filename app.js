// 1. Select all the buttons
const numbers = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
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

function reverseNumFormat(num) {
  return +num.replace(/,/g, "");
}

// alert(reverseNumFormat(getOutput(12312312))); // no comas

// Addint event listeners to all operators
operator.forEach((op) => {
  op.addEventListener("click", () => {
    // alert("Operator clicked");
  });
});

// Adding event listeners to all numbers & printing them in the output
numbers.forEach((n) => {
  n.addEventListener("click", () => {
    // alert("Number clicked");

    let output = reverseNumFormat(getOutput());
    if (output !== NaN) {
      // just checking if the output is a number
      output += n.innerText;
      printOutput(output);
    }
  });
});
