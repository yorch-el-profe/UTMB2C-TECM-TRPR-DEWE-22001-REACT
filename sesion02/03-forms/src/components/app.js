import { useState } from "react";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleUsername(event) {
		setUsername(event.target.value);
	}

	function handlePassword(event) {
		setPassword(event.target.value);
	}

	function handleSend(event) {
		event.preventDefault(); // Detiene que el navegador se actualice cuando hay un "submit"

		if (username === "admin" && password === "123123123") {
			alert("Bienvenido usuario");
		} else {
			alert("Usuario o contraseña invalidos");
		}
	}

	return (
		<div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
			<form className="bg-dark rounded p-5 text-white" onSubmit={handleSend}>
				<h3 className="mb-3">Iniciar Sesión</h3>
				<div className="mb-3">
					<label className="form-label">Usuario</label>
					<input
						type="text"
						className="form-control"
						onChange={handleUsername}
						required
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Contraseña</label>
					<input
						type="password"
						className="form-control"
						onChange={handlePassword}
						required
						minLength={8}
					/>
				</div>
				<button type="submit" className="btn btn-success">
					Enviar
				</button>
			</form>
		</div>
	);
}

export default App;
