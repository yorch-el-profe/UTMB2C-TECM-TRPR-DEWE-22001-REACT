import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/list";
import Detail from "./pages/detail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<List />} />
				<Route path="/pokemon/:id" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
