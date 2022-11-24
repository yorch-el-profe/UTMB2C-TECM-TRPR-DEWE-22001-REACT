export function suma(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error();
	}

	return a + b;
}

export function multiplicacion(a, b) {
	return a * b;
}
