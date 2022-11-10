import Select from "./components/select";
import Image from "./components/image";
import reducer from "./redux/reducer";
import StoreContext from "./redux/store";
import initialState from "./redux/initialState";
import { useReducer } from "react";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			<div className="container mt-5">
				<Select />
				<Image />
			</div>
		</StoreContext.Provider>
	);
}

export default App;
