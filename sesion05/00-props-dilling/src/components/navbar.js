import Toggle from "./toggle";

function Navbar({ mode, setMode }) {
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
				<Toggle setMode={setMode} />
			</div>
		</nav>
	);
}

export default Navbar;
