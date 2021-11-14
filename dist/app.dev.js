"use strict"; // 1. Select all the buttons

var _this = void 0;

var numbers = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
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
    result.innerText = getFormattedNumber(num);
  }
} // How to add comas??
// found reference to toLocaleString()


function getFormattedNumber(num) {
  if (num === "-") {
    return "";
  }

  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
} // printOutput(2222); // 2,222 - this trick worked


function reverseNumFormat(num) {
  return Number(num.replace(/,/g, ""));
} // alert(reverseNumFormat(getOutput(12312312))); // no comas
// Adding event listeners to all operators


operator.forEach(function (op) {
  op.addEventListener("click", function () {
    // alert("Operator clicked");
    // Clar button functionality
    if (op.classList.contains("clear")) {
      printHistory("");
      printOutput("");
    } else if (op.classList.contains("delete")) {
      var output = reverseNumFormat(getOutput()).toString();

      if (output) {
        //output has value?
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var _output = getOutput();

      var _history = getHistory();

      if (_output == "" && _history != "") {
        if (isNaN(_history[_history.length - 1])) {
          _history = _history.substr(0, _history.length - 1);
        }
      }

      if (_output != "" || _history != "") {
        _output = _output == "" ? _output : reverseNumFormat(_output);
        _history = _history + _output;

        if (_this.id == "=") {
          var _result = eval(_history);

          printOutput(_result);
          printHistory("");
        } else {
          _history = _history + op.innerHTML;
          printHistory(_history);
          printOutput("");
        }
      }
    }
  });
}); // Adding event listeners to all numbers & printing them in the output

numbers.forEach(function (n) {
  n.addEventListener("click", function () {
    // alert("Number clicked");
    var output = reverseNumFormat(getOutput());

    if (output != NaN) {
      // just checking if the output is a number
      output += n.innerText;
      printOutput(output);
    }
  });
});