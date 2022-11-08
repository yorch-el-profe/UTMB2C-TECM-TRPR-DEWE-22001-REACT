import Navbar from "./navbar";
import Content from "./content";
import { useState } from "react";

// Props Drilling

function App() {
	const [mode, setMode] = useState(false);

	return (
		<>
			<Navbar mode={mode} setMode={setMode} />
			<Content mode={mode} />
		</>
	);
}

export default App;
