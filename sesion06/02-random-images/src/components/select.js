import { useContext, useEffect, useRef } from "react";
import StoreContext from "../redux/store";

function Select() {
	const selectRef = useRef(null);
	const { state, dispatch } = useContext(StoreContext);

	useEffect(function () {
		fetch("https://bedu-dogs-api.herokuapp.com/breeds")
			.then(function (response) {
				return response.json();
			})
			.then(function ({ data }) {
				dispatch({ type: "update_breeds", payload: data });
			});
	}, []);

	function handleClick(e) {
		dispatch({ type: "select_breed", payload: selectRef.current.value });
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div className="col-8">
				<select className="form-select text-capitalize" ref={selectRef}>
					{state.breeds.map((breed) => (
						<option key={breed} value={breed}>
							{breed}
						</option>
					))}
				</select>
			</div>
			<div className="col-4">
				<button className="btn btn-primary ms-3" onClick={handleClick}>
					Obtener imagen
				</button>
			</div>
		</div>
	);
}

export default Select;
