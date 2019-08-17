#include <webassembly.h>
#include <math.h>

export double add(double a, double b) {
	return a + b;
}

export double substract(double a, double b) {
	return a - b;
}

export double multiply(double a, double b) {
	return a * b;
}

export double divide(double a, double b) {
	return a / b;
}

export double mod(int a, int b) {
	return a % b;
}

export double square_root(double a) {
	return sqrt(a);
}