function App() {
	function fetchToken() {
		fetch("http://localhost:8080/token")
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				window.localStorage.setItem("token", data.token);
			});
	}

	function validateToken() {
		fetch("http://localhost:8080/validar", {
			headers: {
				Authentication: window.localStorage.getItem("token"),
			},
		}).then(function (response) {
			// Si tiene sesión
			if (response.ok) {
				alert("El token es válido");
			} else {
				alert("El token es invalido");
			}
		});
	}
	return (
		<>
			<button onClick={fetchToken}>Ir por token</button>
			<button onClick={validateToken}>Validar token</button>
		</>
	);
}

export default App;
