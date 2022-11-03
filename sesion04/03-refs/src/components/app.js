import { useState, useRef } from "react";

function App() {
	console.log("Renderizando...");

	const [username, setUsername] = useState("");

	const usernameRef = useRef();
	const passwordRef = useRef();

	function handleSubmit(event) {
		event.preventDefault();

		const usernameInput = usernameRef.current;
		const passwordInput = passwordRef.current;

		const username = usernameInput.value;
		const password = passwordInput.value;

		if (!username) {
			//.focus() es del DOM
			usernameInput.focus();
		} else if (!password || password.length < 8) {
			passwordInput.focus();
		} else {
			usernameInput.value = "";
			passwordInput.value = "";
		}
	}

	function handleUsername(event) {
		const text = event.target.value;

		if (text.includes(".")) {
			const newText = text.replace(".", "");
			setUsername(newText);
		} else {
			setUsername(text);
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-center vw-100 vh-100">
			<form onSubmit={handleSubmit} noValidate>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						ref={usernameRef}
						value={username}
						onChange={handleUsername}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						ref={passwordRef}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
