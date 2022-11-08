import { useReducer } from "react";
import initialState from "../reducers/initialState";
import reducer from "../reducers/reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
			<div className="col-6 text-center">
				<h1 className="fs-1">{state.counter}</h1>
				<button
					className="btn btn-secondary btn-lg ms-2"
					type="button"
					onClick={() => dispatch({ type: "decrement" })}
				>
					- 😡
				</button>
				<button
					className="btn btn-danger btn-lg ms-2"
					type="button"
					onClick={() => dispatch({ type: "reset" })}
				>
					Resetear 🙄
				</button>
				<button
					className="btn btn-primary btn-lg ms-2"
					type="button"
					onClick={() => dispatch({ type: "increment" })}
				>
					+ 🥵
				</button>
			</div>
		</div>
	);
}

export default App;
