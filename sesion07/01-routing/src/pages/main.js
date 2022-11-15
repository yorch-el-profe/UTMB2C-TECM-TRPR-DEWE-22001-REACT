import { Link } from "react-router-dom";

function Main() {
	return (
		<>
			<h1>Página principal</h1>
			<h2>
				<Link to="/about">Ir a Acerca De</Link>
			</h2>
			<h2>
				<Link to="/contact">Ir a Contacto</Link>
			</h2>
		</>
	);
}

export default Main;
