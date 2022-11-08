import Navbar from "./navbar";
import Content from "./content";
import { useState } from "react";
import ModeContext from "../contexts/mode";

// Props Drilling

function App() {
	const [mode, setMode] = useState(false);
	return (
		<ModeContext.Provider value={{ mode, setMode }}>
			<Navbar />
			<Content />
		</ModeContext.Provider>
	);
}

export default App;
