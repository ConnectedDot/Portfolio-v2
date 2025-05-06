import React, {useState} from "react";

const Calculator: React.FC = () => {
	const [currentInput, setCurrentInput] = useState("");
	const [previousInput, setPreviousInput] = useState("");
	const [operation, setOperation] = useState<string | null>(null);

	// Update display (currentInput)
	const updateDisplay = () => {
		// The display is directly the currentInput
	};

	// Append pressed number or dot
	const appendNumber = (num: string) => {
		if (num === "." && currentInput.includes(".")) return;
		setCurrentInput(prev => prev + num);
	};

	// Clear all inputs and operation
	const clearAll = () => {
		setCurrentInput("");
		setPreviousInput("");
		setOperation(null);
	};

	// Set operation (+, -, *, /)
	const handleOperation = (op: string) => {
		if (currentInput === "") return;

		if (previousInput !== "") {
			// Calculate previous result first
			calculate();
		}

		setOperation(op);
		setPreviousInput(currentInput);
		setCurrentInput("");
	};

	// Calculate based on previousInput, currentInput, and operation
	const calculate = () => {
		const prev = parseFloat(previousInput);
		const curr = parseFloat(currentInput);
		if (isNaN(prev) || isNaN(curr) || !operation) return;

		let result: number;

		switch (operation) {
			case "+":
				result = prev + curr;
				break;
			case "-":
				result = prev - curr;
				break;
			case "*":
				result = prev * curr;
				break;
			case "/":
				if (curr === 0) {
					alert("Can't divide by zero!");
					return;
				}
				result = prev / curr;
				break;
			default:
				return;
		}

		setCurrentInput(result.toString());
		setPreviousInput("");
		setOperation(null);
	};

	// Render buttons
	const buttons = [
		{label: "C", onClick: clearAll},
		{label: "7", onClick: () => appendNumber("7")},
		{label: "8", onClick: () => appendNumber("8")},
		{label: "9", onClick: () => appendNumber("9")},
		{label: "+", onClick: () => handleOperation("+")},

		{label: "4", onClick: () => appendNumber("4")},
		{label: "5", onClick: () => appendNumber("5")},
		{label: "6", onClick: () => appendNumber("6")},
		{label: "-", onClick: () => handleOperation("-")},

		{label: "1", onClick: () => appendNumber("1")},
		{label: "2", onClick: () => appendNumber("2")},
		{label: "3", onClick: () => appendNumber("3")},
		{label: "*", onClick: () => handleOperation("*")},

		{label: "0", onClick: () => appendNumber("0")},
		{label: ".", onClick: () => appendNumber(".")},
		{label: "=", onClick: calculate},
		{label: "/", onClick: () => handleOperation("/")},
	];

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-80 p-4 bg-white rounded-lg shadow-lg">
				{/* Display */}
				<input
					type="text"
					className="w-full h-12 text-xl bg-gray-200 text-right px-3 rounded mb-4"
					value={currentInput}
					readOnly
				/>

				{/* Buttons grid */}
				<div className="grid grid-cols-4 gap-2">
					{buttons.map((btn, index) => (
						<button
							key={index}
							onClick={btn.onClick}
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
						>
							{btn.label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Calculator;
