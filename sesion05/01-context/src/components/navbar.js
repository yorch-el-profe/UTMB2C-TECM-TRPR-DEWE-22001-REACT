import Toggle from "./toggle";
import ModeContext from "../contexts/mode";
import { useContext } from "react";

function Navbar() {
	const { mode } = useContext(ModeContext);

	return (
		<nav
			className={`navbar navbar-expand-lg ${
				mode ? "navbar-dark bg-dark" : "navbar-light bg-light"
			}`}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<Toggle />
			</div>
		</nav>
	);
}

export default Navbar;
