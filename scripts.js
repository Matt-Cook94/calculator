let currentNumber = "";
let storedNumber = "";

let currentOperatorFunction = {};

const displayBox = document.getElementById("display");
const zeroBtn = document.getElementById("zero-btn");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const modulusBtn = document.getElementById("modulus");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
const plusMinusBtn = document.getElementById("plus-minus");

zeroBtn.addEventListener("click", () => updateNumber("0"));
oneBtn.addEventListener("click", () => updateNumber("1"));
twoBtn.addEventListener("click", () => updateNumber("2"));
threeBtn.addEventListener("click", () => updateNumber("3"));
fourBtn.addEventListener("click", () => updateNumber("4"));
fiveBtn.addEventListener("click", () => updateNumber("5"));
sixBtn.addEventListener("click", () => updateNumber("6"));
sevenBtn.addEventListener("click", () => updateNumber("7"));
eightBtn.addEventListener("click", () => updateNumber("8"));
nineBtn.addEventListener("click", () => updateNumber("9"));
addBtn.addEventListener("click", () => storeOperator(add));
subtractBtn.addEventListener("click", () => storeOperator(subtract));
multiplyBtn.addEventListener("click", () => storeOperator(multiply));
divideBtn.addEventListener("click", () => storeOperator(divide));
modulusBtn.addEventListener("click", () => storeOperator(modulus));
equalsBtn.addEventListener("click", () => operate(currentOperatorFunction, storedNumber, currentNumber));
clearBtn.addEventListener("click", () => clearCalculator());
decimalBtn.addEventListener("click", () => updateNumber("."));
plusMinusBtn.addEventListener("click", () => updateSign());


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}


function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}


function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}


function divide(a, b) {
    if (b === "0") {
        return "Cannot divide by zero"
    } else {
        return parseFloat(a) / parseFloat(b);
    }
}


function modulus(a, b) {
    return parseFloat(a) % parseFloat(b);
}


function operate(operatorCallback, numberOne, numberTwo) {
    storedNumber = operatorCallback(numberOne, numberTwo);
    updateDisplay(storedNumber);
}


function updateSign() {
    if(!currentNumber.includes("-")) {
        currentNumber = "-" + currentNumber;
        updateDisplay(currentNumber);
    } else {
        currentNumber = currentNumber.replace("-", "")
        updateDisplay(currentNumber);
    };
}


function updateNumber(number) {
    if(currentNumber.includes(".") && number === ".") return;
    currentNumber += number;
    updateDisplay(currentNumber);
}


function storeOperator(operatorFunction) {
    updateOperator(operatorFunction);
}


function updateOperator(operatorFunction) {
    if (storedNumber === "") {
        storedNumber = currentNumber;
    } else {
        operate(currentOperatorFunction, storedNumber, currentNumber);
    }
    currentOperatorFunction = operatorFunction;
    currentNumber = "";
}


function updateDisplay(number) {
    document.getElementById("display").innerHTML = number;
}


function clearCalculator() {
    storedNumber = "";
    currentNumber = "";
    currentOperatorFunction = {};
    updateDisplay(0);
}
