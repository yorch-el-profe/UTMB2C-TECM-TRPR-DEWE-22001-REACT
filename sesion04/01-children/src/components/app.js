import Navbar from "./navbar";
import NavbarOptions from "./navbar-options";

function App() {
	return (
		<div>
			<Navbar title="Menu 1">
				<NavbarOptions>
					<li>Opcion 1</li>
					<li>Opcion 2</li>
					<li>Opcion 3</li>
				</NavbarOptions>
			</Navbar>
			<Navbar title="Menu 2">
				<NavbarOptions>
					<li>Opcion A</li>
					<li>Opcion B</li>
					<li>Opcion C</li>
					<li>Opcion D</li>
					<li>Opcion E</li>
				</NavbarOptions>
			</Navbar>
		</div>
	);
}

export default App;
