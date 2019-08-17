const result = document.querySelector('#result');
const czero = document.querySelector('#czero');
const cezero = document.querySelector('#cezero');
const positive_negative = document.querySelector('#positive-negative');
const sqrt = document.querySelector('#sqrt');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const add = document.querySelector('#add');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const subs = document.querySelector('#subs');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const multiply = document.querySelector('#multiply');
const mod = document.querySelector('#mod');
const zero = document.querySelector('#zero');
const equals = document.querySelector('#equals');
const divide = document.querySelector('#divide');wasmLoaded = true;

const controls = [result, czero, cezero, positive_negative, sqrt, one, two, three, four, five, six, seven, eight, nine, zero, add, multiply, mod, divide, equals, subs];

controls.forEach(c => {
	if (c !== 'result') {
		c.addEventListener('click', (e) => {
			handleDisplay(e);
		});
	}
})

function handleDisplay(e) {
	const text = e.target.innerText;
	if (result.innerText == "0.0" || result.innerText == "0") {
		result.innerText = "";
	}
	if (text == "C" || text == "CE") {
		result.innerText = "0.0";
		return;
	}
	if (
		(text == "0" && result.innerText == "0.0")
		|| (text == "0" && result.innerText == "0")
	) {
		result.innerHTML = "0";
		return;
	}
	// if (
	// 	(text == "+" || text == "-" || text == "*" || text == "/" || text == "%") && 
	// 	(!result.innerText.includes(text+text))
	// ) {
	// 	return;
	// }
	if (text == "=") {
		result.innerText = calculate(result.innerText);
		return;
	}
	result.innerHTML += e.target.innerHTML;
}

function calculate(text) {
	if (text.includes("+")) {
		const operandsArray = splitText(text, "+");
		return cadd(operandsArray[0], operandsArray[1]);
	} 
	if (text.includes("-")) {
		const operandsArray = splitText(text, "-");
		return parseInt(csubs(operandsArray[0], operandsArray[1]));
	}
	if (text.includes("*")) {
		const operandsArray = splitText(text, "*");
		return cmultiply(operandsArray[0], operandsArray[1]);
	} 
	if (text.includes("/")) {
		const operandsArray = splitText(text, "/");
		return cdivide(operandsArray[0], operandsArray[1]);
	} 
	if (text.includes("%")) {
		const operandsArray = splitText(text, "%");
		return cmod(operandsArray[0], operandsArray[1]);
	}
}

function splitText(text, operand) {
	const operandsArray = text.split(operand);
	let operandsArrayType = new Array();
	operandsArray.forEach((operand, index) => {
		operandsArray[index] = parseFloat(operand);
	});
	return operandsArray;
}