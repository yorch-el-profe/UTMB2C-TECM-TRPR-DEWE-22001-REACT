import Select from "./components/select";
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
			</div>
		</StoreContext.Provider>
	);
}

export default App;
