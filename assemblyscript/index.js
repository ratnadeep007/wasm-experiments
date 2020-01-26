const wasm = require( './wasm_loader' );

console.log( "1 + 2 = " + wasm.add( 1, 2 ) );
console.log( "1 - 2 = " + wasm.substract( 1, 2 ) );
console.log( "1 X 2 = " + wasm.multiply( 1, 2 ) );
console.log( "1 / 2 = " + wasm.divide( 1, 2 ) );
console.log( "1 % 2 = " + wasm.mod( 1, 2 ) );
console.log( "Square root of 9 = " + wasm.square_root( 9 ) );