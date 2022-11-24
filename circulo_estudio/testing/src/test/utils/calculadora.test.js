import { suma } from "../../utils/calculadora";

describe("Probando la calculadora", () => {
	it("0 + 0 = 0", () => {
		const resultado = suma(0, 0);

		// Esperaría que el resultado de la suma 0 + 0 sea igual a 0
		expect(resultado).toBe(0);
	});

	it("n + 0 = n", () => {
		const random = Math.ceil(Math.random() * 10000000);
		const resultado = suma(random, 0);
		const resultado2 = suma(0, random);
		expect(resultado).toBe(random);
		expect(resultado2).toBe(random);
	});

	it("false + [] = error", () => {
		// Esperaría que esa ejecución de suma lanze un error
		expect(() => suma(false, [])).toThrow();
	});
});
