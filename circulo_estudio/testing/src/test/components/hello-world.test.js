import { render, screen } from "@testing-library/react";
import HelloWorld from "../../components/hello-world";

describe("<HelloWorld />", () => {
	it("should render", async () => {
		render(<HelloWorld />);

		/*
      Valida que un nodo con el texto "Hello World"
      se encuentre en pantalla
     */
		const resultado = await screen.findByText("Hello World");
		expect(resultado).toBeInTheDocument();
	});
});
