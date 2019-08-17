// require("webassembly")
// 	.load("program.wasm")
// 	.then(module => {
// 		console.log("1 + 2 = " + module.exports.add(1+2))
// 	});

const wasm = require("webassembly");

const loaded = wasm.load("program.wasm");

loaded.then(module => {
	console.log("1 + 2 = " + module.exports.add(1,2));
	console.log("1 - 2 = " + module.exports.substract(1,2));
	console.log("1 X 2 = " + module.exports.multiply(1,2));
	console.log("1 / 2 = " + module.exports.divide(1,2));
	console.log("1 % 2 = " + module.exports.mod(1,2));
})