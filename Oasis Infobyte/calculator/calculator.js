let currentInput = "";
let operator = "";
let previousInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    document.getElementById('display').value = "";
}

function setOperator(value) {
    if (currentInput !== "") {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
    }
}

function calculate() {
    let result = 0;
    switch (operator) {
        case "+":
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case "-":
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case "*":
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case "/":
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    document.getElementById('display').value = result;
    currentInput = result.toString();
    operator = "";
    previousInput = "";
}
