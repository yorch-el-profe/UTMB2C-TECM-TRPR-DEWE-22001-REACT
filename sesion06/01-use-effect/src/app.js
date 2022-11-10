import { useState, useEffect } from "react";

function App() {
	console.log("Renderizando...");

	const [time, setTime] = useState(new Date().toLocaleTimeString());

	/*
    El useEffect por defecto se ejecuta después de cada renderizado.

    Cuando el segundo parámetro es un [] el useEffect se ejecuta sólo 1 vez.

    Cuando el segundo parámetro es un [] con variables entonces
    el useEffect se ejecuta cuando esas variables cambien.
   */
	useEffect(function () {
		console.log("Después del renderizado...");

		setInterval(function () {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
			<h1>{time}</h1>
		</div>
	);
}

export default App;
