// The entry file of your WebAssembly module.

export function add ( a: f64, b: f64 ): f64 {
  return a + b;
}

export function substract ( a: f64, b: f64 ): f64 {
  return a - b;
}

export function multiply ( a: f64, b: f64 ): f64 {
  return a * b;
}

export function divide ( a: f64, b: f64 ): f64 {
  return a / b;
}

export function mod ( a: f64, b: f64 ): f64 {
  return a % b;
}

export function square_root ( a: f64 ): f64 {
  return sqrt( a );
}
