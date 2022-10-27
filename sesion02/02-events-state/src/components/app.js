import { useState } from "react";

/*
  El estado de un componente define
  el aspecto visual y el comportamiento del mismo.

  La actualización del estado obliga al componente
  a renderizarse nuevamente.
 */

function App() {
	console.log("Renderizando...");

	// Recibe como parámetro el estado inicial
	// cuando se ejecuta por primera vez el componente
	const [counter, setCounter] = useState(0);

	console.log("counter:", counter);

	// useState regresa un arreglo donde
	// el primer elemento es el estado actual
	// y el segundo una función para actualizar
	// el estado

	function handleClick() {
		setCounter(counter + 1);
	}

	return (
		<div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
			<div className="col-6 text-center">
				<h1 className="fs-1">{counter}</h1>
				<button
					className="btn btn-danger btn-lg"
					type="button"
					onClick={handleClick}
				>
					Clickeame 🥵
				</button>
			</div>
		</div>
	);
}

export default App;
