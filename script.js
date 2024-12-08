//This is the final boss so it's gonna take a while, don't get discouraged
let numberA = "";
let operator = "";
let numberB = "";

const display = document.getElementById("display");
      display.value = "0";

function isNumber (input) {                //helper function helps reduce nesting conditionals, helper function 1 checks whether input is a number by !NaN
  return !isNaN(input)
}

function isOperator (input) {               //helper function 2, checks if the operator is valid, make sure the operator is handled separately from numbers
  return ["+", "-", "x", "/"].includes(input)
}

function numberDisplay (input) {           //helper function 3 handles number input
  if (!operator) {
    numberA += input
  } else {
    numberB +=input
  }
  if (display.value === "0") { 
    display.value = input
  } else {
    display.value += input
  }
}

function operatorDisplay (input) {      //helper function 4 handles operator input and calls calculation
  if (!operator) {
    operator = input;
    display.value += `${input}`
  } else if (numberB) {
    calculate ()
    operator = input;
    display.value += `${input}` 
  }
}

function appendToDisplay(input) {
  if (isNumber(input)) {                        //if number is number then display it, if operator is operator then display it, if input is = then calculate
    numberDisplay(input)
  } else if (isOperator(input)) {
    operatorDisplay(input)
  } else if (input === "=") {
    calculate()
  }
}

function clearDisplay() {
  display.value = "0";
  numberA = "";
  operator = "";
  numberB = "";
};

const add = function(a,b) {
    return a + b;
  };
  
const subtract = function(a,b) {
    return a - b;
  };

const multiply = function(a,b) {
    return a * b; 
  };

const division = function(a,b) {
    if (b === 0) {
         return "ERROR: DIVISION BY ZERO";
    }
    return a / b;
  };

const operate = function(numberA, operator, numberB) {
    if (operator == "+") {
        return add(numberA, numberB)
    } else if (operator == "-") {
        return subtract(numberA, numberB)
    } else if (operator == "x") {
        return multiply(numberA, numberB)
    } else if (operator == "/") {
        return division(numberA, numberB)
    }
};

function calculate () {
  if (numberA && operator && numberB) {
    const result = operate(parseFloat(numberA), operator, parseFloat(numberB));
    display.value = result;

    numberA = result;
    numberB = "";
    operator = "";
  } else {
    display.value = "ERROR"
  }
};


