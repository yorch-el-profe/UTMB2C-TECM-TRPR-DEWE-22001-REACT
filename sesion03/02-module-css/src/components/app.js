import styles from "./app.module.css";
import { useState } from "react";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmited, setIsSubmited] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setIsSubmited(true);
	}

	function handleUsername(event) {
		setUsername(event.target.value);
	}

	function handlePassword(event) {
		setPassword(event.target.value);
	}

	const isUsernameValid = username.length >= 3 || !isSubmited;
	const isPasswordValid = password.length >= 8 || !isSubmited;

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<div
					className={`${styles["form-group"]} ${
						isUsernameValid ? "" : styles.invalid
					}`}
				>
					<label>Usuario</label>
					<input type="text" onChange={handleUsername} />
				</div>
				<div
					className={`${styles["form-group"]} ${
						isPasswordValid ? "" : styles.invalid
					}`}
				>
					<label>Contraseña</label>
					<input type="password" onChange={handlePassword} />
				</div>
				<div className={styles["form-group"]}>
					<button type="submit">Enviar</button>
				</div>
			</form>
		</div>
	);
}

export default App;
