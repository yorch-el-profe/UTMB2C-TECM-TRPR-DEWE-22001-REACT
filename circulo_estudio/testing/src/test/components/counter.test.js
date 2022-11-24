import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../../components/counter";

describe("<Counter />", () => {
	it("should render", async () => {
		render(<Counter />);

		const resultado = await screen.findByText("0");
		const boton = await screen.findByRole("button");
		expect(resultado).toBeInTheDocument();
		expect(boton).toBeInTheDocument();
	});

	it("should increase counter on button click", async () => {
		render(<Counter />);

		const boton = await screen.findByRole("button");
		userEvent.click(boton); // Simular un click del usuario
		userEvent.click(boton);
		userEvent.click(boton);
		userEvent.click(boton);
		userEvent.click(boton);

		const resultado = await screen.findByText("5");
		expect(resultado).toBeInTheDocument();
	});
});
