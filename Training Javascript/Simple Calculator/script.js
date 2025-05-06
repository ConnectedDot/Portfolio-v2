// Variables to store current input, previous input, and current operation
let currentInput = "";
let previousInput = "";
let operation = null;

// Function to update the display with current input
function updateDisplay() {
	document.getElementById("display").value = currentInput;
}

// Append number or decimal point to current input
function appendNumber(number) {
	if (number === "." && currentInput.includes(".")) return; // prevent multiple dots
	currentInput += number;
	updateDisplay();
}

// Clear the display and reset all variables
function clearDisplay() {
	currentInput = "";
	previousInput = "";
	operation = null;
	updateDisplay();
}

// Set the operation (+, -, *, /)
function setOperation(op) {
	if (currentInput === "") return; // do nothing if no current input

	if (previousInput !== "") {
		calculate(); // compute previous operation
	}
	operation = op;
	previousInput = currentInput;
	currentInput = "";
}

// Perform calculation based on previous input, current input, and the operation
function calculate() {
	const prev = parseFloat(previousInput);
	const current = parseFloat(currentInput);
	let result;

	if (isNaN(prev) || isNaN(current)) return; // invalid input

	switch (operation) {
		case "+":
			result = prev + current;
			break;
		case "-":
			result = prev - current;
			break;
		case "*":
			result = prev * current;
			break;
		case "/":
			if (current === 0) {
				alert("Can't divide by zero!");
				return;
			}
			result = prev / current;
			break;
		default:
			return;
	}

	currentInput = result.toString();
	previousInput = "";
	operation = null;
	updateDisplay();
}

// Optional: handle pressing the "=" button to calculate
document
	.querySelector('button[onclick="calculate()"]')
	.addEventListener("click", calculate);
