#include <webassembly.h>

export int add(int a, int b) {
	return a + b;
}

export int substract(int a, int b) {
	return a - b;
}

export int multiply(int a, int b) {
	return a * b;
}

export int divide(int a, int b) {
	return a / b;
}

export int mod(int a, int b) {
	return a % b;
}